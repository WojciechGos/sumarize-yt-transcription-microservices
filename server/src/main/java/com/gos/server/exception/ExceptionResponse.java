package com.gos.server.exception;

import java.sql.Timestamp;

public record ExceptionResponse(
        int status,
        String error,
        String message,
        Timestamp timestamp
) {
}