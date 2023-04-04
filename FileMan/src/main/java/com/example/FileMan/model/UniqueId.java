package com.example.FileMan.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UniqueId implements Serializable {
    private static final long serialVersionUID = 0L;
    @Id
    private String uniqueId;
}