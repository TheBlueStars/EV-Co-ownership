package com.project.evco.governance.service;

import com.project.evco.common.exception.BusinessException;
import com.project.evco.governance.dto.CreateVoteRequest;
import com.project.evco.governance.dto.SubmitVoteRequest;
import com.project.evco.governance.dto.VoteDto;
import com.project.evco.governance.entity.Vote;
import com.project.evco.governance.entity.VoteBallot;
import com.project.evco.governance.enums.VoteStatus;
import com.project.evco.governance.repository.VoteBallotRepository;
import com.project.evco.governance.repository.VoteRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final VoteBallotRepository ballotRepository;

    public List<VoteDto> listVotes(Long groupId) {
        List<Vote> votes = (groupId != null)
                ? voteRepository.findByGroupId(groupId)
                : voteRepository.findAll();
        return votes.stream().map(this::toDto).toList();
    }

    public VoteDto getVote(Long id) {
        Vote v = voteRepository.findById(id)
                .orElseThrow(() -> new BusinessException("Vote không tồn tại"));
        return toDto(v);
    }

    @Transactional
    public VoteDto createVote(CreateVoteRequest req) {
        Vote v = Vote.builder()
                .groupId(req.getGroupId())
                .title(req.getTitle())
                .description(req.getDescription())
                .expiredAt(req.getExpiredAt())
                .status(VoteStatus.OPEN)
                .yesCount(0)
                .noCount(0)
                .build();
        voteRepository.save(v);
        return toDto(v);
    }

    @Transactional
    public VoteDto submitVote(Long voteId, Long userId, SubmitVoteRequest req) {
        Vote v = voteRepository.findById(voteId)
                .orElseThrow(() -> new BusinessException("Vote không tồn tại"));

        if (v.getStatus() != VoteStatus.OPEN) {
            throw new BusinessException("Cuộc vote đã đóng");
        }
        if (v.getExpiredAt() != null && v.getExpiredAt().isBefore(LocalDateTime.now())) {
            v.setStatus(VoteStatus.CLOSED);
            voteRepository.save(v);
            throw new BusinessException("Cuộc vote đã hết hạn");
        }

        // Nếu user đã vote -> không cho vote lại (đơn giản)
        ballotRepository.findByVoteIdAndUserId(voteId, userId)
                .ifPresent(b -> { throw new BusinessException("Bạn đã tham gia vote này"); });

        // lưu ballot
        VoteBallot ballot = VoteBallot.builder()
                .voteId(voteId)
                .userId(userId)
                .agree(req.getAgree())
                .build();
        ballotRepository.save(ballot);

        if (Boolean.TRUE.equals(req.getAgree())) {
            v.setYesCount(v.getYesCount() + 1);
        } else {
            v.setNoCount(v.getNoCount() + 1);
        }
        voteRepository.save(v);

        return toDto(v);
    }

    private VoteDto toDto(Vote v) {
        return VoteDto.builder()
                .id(v.getId())
                .groupId(v.getGroupId())
                .title(v.getTitle())
                .description(v.getDescription())
                .yesCount(v.getYesCount())
                .noCount(v.getNoCount())
                .status(v.getStatus())
                .createdAt(v.getCreatedAt())
                .expiredAt(v.getExpiredAt())
                .build();
    }
}
