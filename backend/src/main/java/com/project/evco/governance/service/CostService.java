package com.project.evco.governance.service;

import com.project.evco.governance.dto.CostDto;
import com.project.evco.governance.entity.CostRecord;
import com.project.evco.governance.repository.CostRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CostService {

    private final CostRecordRepository costRecordRepository;

    public List<CostDto> listByGroup(Long groupId) {
        return costRecordRepository.findAll().stream()
                .filter(c -> groupId == null || groupId.equals(c.getGroupId()))
                .map(c -> CostDto.builder()
                        .id(c.getId())
                        .groupId(c.getGroupId())
                        .bookingId(c.getBookingId())
                        .type(c.getType())
                        .amount(c.getAmount())
                        .description(c.getDescription())
                        .occurredAt(c.getOccurredAt())
                        .build())
                .toList();
    }
}
