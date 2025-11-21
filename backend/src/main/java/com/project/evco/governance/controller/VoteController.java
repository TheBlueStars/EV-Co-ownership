package com.project.evco.governance.controller;

import com.project.evco.governance.dto.CreateVoteRequest;
import com.project.evco.governance.dto.SubmitVoteRequest;
import com.project.evco.governance.dto.VoteDto;
import com.project.evco.governance.service.VoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VoteController {

    private final VoteService voteService;

    @GetMapping("/v1/votes")
    public ResponseEntity<List<VoteDto>> listVotes(
            @RequestParam(required = false) Long groupId
    ) {
        return ResponseEntity.ok(voteService.listVotes(groupId));
    }

    @GetMapping("/v1/votes/{id}")
    public ResponseEntity<VoteDto> getVote(@PathVariable Long id) {
        return ResponseEntity.ok(voteService.getVote(id));
    }

    @PostMapping("/v1/votes")
    public ResponseEntity<VoteDto> createVote(@RequestBody CreateVoteRequest req) {
        return ResponseEntity.ok(voteService.createVote(req));
    }

    @PostMapping("/v1/votes/{id}/submit")
    public ResponseEntity<VoteDto> submit(
            @PathVariable Long id,
            @RequestBody SubmitVoteRequest req,
            Authentication auth
    ) {
        // demo: userId = 1L, thực tế nên lấy từ JWT
        Long userId = 1L;
        return ResponseEntity.ok(voteService.submitVote(id, userId, req));
    }
}
