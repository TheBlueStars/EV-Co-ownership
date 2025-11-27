package com.project.evco.service.impl;

import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.entity.OwnershipGroup;
import com.project.evco.governance.repository.GroupMemberRepository;
import com.project.evco.governance.repository.OwnershipGroupRepository;
import com.project.evco.service.GroupService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {

    private final OwnershipGroupRepository groupRepository;
    private final GroupMemberRepository memberRepository;

    public GroupServiceImpl(OwnershipGroupRepository groupRepository, GroupMemberRepository memberRepository) {
        this.groupRepository = groupRepository;
        this.memberRepository = memberRepository;
    }

    @Override
    public OwnershipGroup createGroup(OwnershipGroup group) {
        return groupRepository.save(group);
    }

    @Override
    public GroupMember addMember(GroupMember member) {
        return memberRepository.save(member);
    }

    @Override
    public List<OwnershipGroup> findGroupsByUserId(Long userId) {
        List<GroupMember> members = memberRepository.findAll();
        List<Long> groupIds = members.stream()
                .filter(m -> m.getUserId() != null && m.getUserId().equals(userId))
                .map(GroupMember::getGroupId)
                .collect(Collectors.toList());
        return groupRepository.findAllById(groupIds);
    }
}
