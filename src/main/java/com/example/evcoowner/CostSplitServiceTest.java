package com.example.evcoowner;

import com.example.evcoowner.service.CostSplitService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import java.util.HashMap;
import java.util.Map;

public class CostSplitServiceTest {
    private final CostSplitService service = new CostSplitService();

    @Test
    void testSplitCostEvenly() {
        Map<String, Integer> members = new HashMap<>();
        members.put("Dat", 1);
        members.put("Anh", 1);
        members.put("Bao", 1);

        Map<String, Double> result = service.splitCost(300.0, members);
        Assertions.assertEquals(100.0, result.get("Dat"));
        Assertions.assertEquals(100.0, result.get("Anh"));
        Assertions.assertEquals(100.0, result.get("Bao"));
    }
}
