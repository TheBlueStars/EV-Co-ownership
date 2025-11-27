package com.project.evco.governance.repository;

import com.project.evco.governance.entity.OwnershipGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OwnershipGroupRepository extends JpaRepository<OwnershipGroup, Long> {
    List<OwnershipGroup> findByVehicleId(Long vehicleId);
}
