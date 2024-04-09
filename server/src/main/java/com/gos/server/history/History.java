package com.gos.server.history;


import com.gos.server.customUserDetails.CustomUserDetails;
import com.gos.server.exception.BadRequestException;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

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
    private String content;
    private String videoId;
    private String videoTitle;
    @ManyToOne
    private CustomUserDetails user;

    public History(String content, String videoId, String videoTitle, CustomUserDetails user)  {
        this.content = content;
        this.videoId = videoId;
        this.user = user;
        this.videoTitle = videoTitle;
    }

    public History(String content, CustomUserDetails user) {
        this.content = content;
        this.user = user;
    }
}
