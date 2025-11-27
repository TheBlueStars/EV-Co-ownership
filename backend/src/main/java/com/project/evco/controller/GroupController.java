package com.project.evco.controller;

import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.entity.OwnershipGroup;
import com.project.evco.service.GroupService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groups")
public class GroupController {

    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @PostMapping
    public ResponseEntity<OwnershipGroup> createGroup(@RequestBody OwnershipGroup group) {
        OwnershipGroup saved = groupService.createGroup(group);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/{groupId}/members")
    public ResponseEntity<GroupMember> addMember(@PathVariable Long groupId, @RequestBody GroupMember member) {
        member.setGroupId(groupId);
        GroupMember saved = groupService.addMember(member);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OwnershipGroup>> listByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(groupService.findGroupsByUserId(userId));
    }
}
