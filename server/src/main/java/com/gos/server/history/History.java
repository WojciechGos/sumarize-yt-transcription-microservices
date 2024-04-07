package com.gos.server.history;


import com.gos.server.customUserDetails.CustomUserDetails;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String url;
    @ManyToOne
    private CustomUserDetails user;

    public History(String content, String url, CustomUserDetails user) {
        this.content = content;
        this.url = url;
        this.user = user;
    }

    public History(String content, CustomUserDetails user) {
        this.content = content;
        this.user = user;
    }
}
