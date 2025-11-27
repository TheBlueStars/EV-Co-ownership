package com.project.evco.operation.repository;

import com.project.evco.operation.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("operationVehicleRepository")
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
