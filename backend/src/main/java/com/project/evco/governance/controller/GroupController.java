package com.project.evco.governance.controller;

import com.project.evco.governance.dto.GroupDto;
import com.project.evco.governance.dto.GroupMemberDto;
import com.project.evco.governance.service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class GroupController {

    private final GroupService groupService;

    @GetMapping("/governance/groups")
    public ResponseEntity<List<GroupDto>> listGroups() {
        return ResponseEntity.ok(groupService.listGroups());
    }

    @GetMapping("/governance/groups/{id}")
    public ResponseEntity<GroupDto> getGroup(@PathVariable Long id) {
        return ResponseEntity.ok(groupService.getGroup(id));
    }

    @PostMapping("/governance/groups")
    public ResponseEntity<GroupDto> createGroup(@RequestBody GroupDto dto) {
        return ResponseEntity.ok(groupService.createGroup(dto));
    }

    @PutMapping("/governance/groups/{id}")
    public ResponseEntity<GroupDto> updateGroup(
            @PathVariable Long id,
            @RequestBody GroupDto dto
    ) {
        return ResponseEntity.ok(groupService.updateGroup(id, dto));
    }

    @DeleteMapping("/governance/groups/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        groupService.deleteGroup(id);
        return ResponseEntity.noContent().build();
    }

    // members
    @GetMapping("/governance/groups/{groupId}/members")
    public ResponseEntity<List<GroupMemberDto>> listMembers(@PathVariable Long groupId) {
        return ResponseEntity.ok(groupService.listMembers(groupId));
    }

    @PostMapping("/governance/groups/{groupId}/members")
    public ResponseEntity<GroupMemberDto> addMember(
            @PathVariable Long groupId,
            @RequestBody GroupMemberDto dto
    ) {
        dto.setGroupId(groupId);
        return ResponseEntity.ok(groupService.addMember(dto));
    }

    @PutMapping("/governance/groups/{groupId}/members/{memberId}")
    public ResponseEntity<GroupMemberDto> updateMember(
            @PathVariable Long groupId,
            @PathVariable Long memberId,
            @RequestBody GroupMemberDto dto
    ) {
        dto.setGroupId(groupId);
        dto.setId(memberId);
        return ResponseEntity.ok(groupService.updateMember(memberId, dto));
    }

    @DeleteMapping("/governance/groups/{groupId}/members/{memberId}")
    public ResponseEntity<?> deleteMember(
            @PathVariable Long groupId,
            @PathVariable Long memberId
    ) {
        groupService.deleteMember(memberId);
        return ResponseEntity.noContent().build();
    }
}
