package com.project.evco.service;

import com.project.evco.governance.entity.GroupMember;
import com.project.evco.governance.entity.OwnershipGroup;

import java.util.List;

public interface GroupService {
    OwnershipGroup createGroup(OwnershipGroup group);

    GroupMember addMember(GroupMember member);

    List<OwnershipGroup> findGroupsByUserId(Long userId);
}
