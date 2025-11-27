package com.project.evco.common.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtil {

    private static final DateTimeFormatter ISO = DateTimeFormatter.ISO_DATE_TIME;

    public static String toIso(LocalDateTime dt) {
        return dt == null ? null : dt.format(ISO);
    }

    public static LocalDateTime fromIso(String text) {
        return text == null ? null : LocalDateTime.parse(text, ISO);
    }
}
