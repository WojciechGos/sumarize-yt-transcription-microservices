package com.gos.server.history;


import com.gos.server.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class History {
    @SequenceGenerator(
            name = "history_sequence",
            sequenceName = "history_sequence",
            allocationSize = 1
    )
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "history_sequence"
    )
    private Long id;
    @Column(columnDefinition = "TEXT")
    @NotBlank(message = "Content cannot be blank")
    @NotNull(message = "Content cannot be null")
    private String content;
    private String videoId;
    private Date date = new Date(System.currentTimeMillis());

    public History(String content, String videoId) {
        this.content = content;
        this.videoId = videoId;
    }
}
