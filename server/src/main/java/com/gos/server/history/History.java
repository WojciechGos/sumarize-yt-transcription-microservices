package com.gos.server.history;


import com.gos.server.user.User;
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
    @ManyToOne
    private User user;

    public History(String content, User user) {
        this.content = content;
        this.user = user;
    }
}
