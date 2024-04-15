package com.gos.server.summarize;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record SummarizeRequest(
        @NotNull(message = "Video url cannot be null")
        @NotBlank(message = "Video url cannot be blank")
        @Pattern(regexp = "^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.?be)\\/.+$", message = "Incorrect YouTube video URL format.")
        String videoUrl
) {
}
