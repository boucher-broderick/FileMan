package com.example.FileMan.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import static jakarta.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@NamedStoredProcedureQueries({
        @NamedStoredProcedureQuery(name="getProjects", procedureName = "getProjects"),
        @NamedStoredProcedureQuery(name="createProject", procedureName = "createProject",
        parameters = {
                @StoredProcedureParameter(mode = ParameterMode.IN, name="name", type= String.class),
                @StoredProcedureParameter(mode = ParameterMode.IN, name="description", type= String.class),
                @StoredProcedureParameter(mode = ParameterMode.IN, name="createdBy", type= String.class),
                @StoredProcedureParameter(mode = ParameterMode.IN, name="accessKey", type= String.class),
        })
})
public class Project {
    @Id
    @GeneratedValue(strategy = AUTO)
    private Long pid;
    @Column(unique = true)
    @NotEmpty(message = "Must not be empty or null")
    private String name;
    private String description;
    private String createdBy;
    private Date createdDate;
    private String accessKey;

}

