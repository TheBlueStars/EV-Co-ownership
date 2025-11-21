package com.project.evco.governance.service;

import com.project.evco.governance.dto.GroupDto;
import com.project.evco.governance.dto.GroupMemberDto;
import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.entity.OwnershipGroup;
import com.project.evco.governance.repository.GroupMemberRepository;
import com.project.evco.governance.repository.OwnershipGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupService {

    private final OwnershipGroupRepository groupRepository;
    private final GroupMemberRepository memberRepository;

    public List<GroupDto> listGroups() {
        return groupRepository.findAll().stream()
                .map(this::toDto)
                .toList();
    }

    public GroupDto getGroup(Long id) {
        OwnershipGroup g = groupRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Group không tồn tại"));
        return toDto(g);
    }

    public GroupDto createGroup(GroupDto dto) {
        OwnershipGroup g = OwnershipGroup.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .vehicleId(dto.getVehicleId())
                .build();
        groupRepository.save(g);
        return toDto(g);
    }

    public GroupDto updateGroup(Long id, GroupDto dto) {
        OwnershipGroup g = groupRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Group không tồn tại"));
        g.setName(dto.getName());
        g.setDescription(dto.getDescription());
        g.setVehicleId(dto.getVehicleId());
        groupRepository.save(g);
        return toDto(g);
    }

    public void deleteGroup(Long id) {
        groupRepository.deleteById(id);
    }

    public List<GroupMemberDto> listMembers(Long groupId) {
        return memberRepository.findByGroupId(groupId).stream()
                .map(this::toMemberDto)
                .toList();
    }

    public GroupMemberDto addMember(GroupMemberDto dto) {
        GroupMember m = GroupMember.builder()
                .groupId(dto.getGroupId())
                .userId(dto.getUserId())
                .sharePercent(dto.getSharePercent())
                .groupAdmin(dto.isGroupAdmin())
                .build();
        memberRepository.save(m);
        return toMemberDto(m);
    }

    public GroupMemberDto updateMember(Long memberId, GroupMemberDto dto) {
        GroupMember m = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("Thành viên không tồn tại"));
        m.setSharePercent(dto.getSharePercent());
        m.setGroupAdmin(dto.isGroupAdmin());
        memberRepository.save(m);
        return toMemberDto(m);
    }

    public void deleteMember(Long memberId) {
        memberRepository.deleteById(memberId);
    }

    private GroupDto toDto(OwnershipGroup g) {
        return GroupDto.builder()
                .id(g.getId())
                .name(g.getName())
                .description(g.getDescription())
                .vehicleId(g.getVehicleId())
                .build();
    }

    private GroupMemberDto toMemberDto(GroupMember m) {
        return GroupMemberDto.builder()
                .id(m.getId())
                .groupId(m.getGroupId())
                .userId(m.getUserId())
                .sharePercent(m.getSharePercent())
                .groupAdmin(m.isGroupAdmin())
                .build();
    }
}
