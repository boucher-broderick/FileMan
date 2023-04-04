package com.example.FileMan.resource;

import com.example.FileMan.model.Project;
import com.example.FileMan.model.Response;
import com.example.FileMan.model.createProject;
import com.example.FileMan.service.implementation.ProjectServiceImpementation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
public class ProjectResource {
    private final ProjectServiceImpementation projectService;

    @PostMapping("/createProject")
    public ResponseEntity<Response> createProject(@RequestBody @Valid createProject p) throws IOException{
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", projectService.createProject(p.getName(),p.getDescription(),p.getCreatedBy())))
                        .message("Project created")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()

        );
    }
    @GetMapping("/getProjects")
    public ResponseEntity<Response> getProjects()  throws InterruptedException{
        TimeUnit.SECONDS.sleep(3);
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", projectService.getProjects()))
                        .message("Projects retreived")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()

        );
    }

    @PostMapping("/save")
    public ResponseEntity<Response> saveProject(@RequestBody @Valid Project project) throws IOException {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", project))
                        .message("Projects created")
                        .status(CREATED)
                        .statusCode(CREATED.value())
                        .build()

        );
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Response> getProject(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("projects", projectService.get(id)))
                        .message("Project retreived")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()

        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteProject(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("deleted", projectService.delete(id)))
                        .message("Project deleted")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()

        );
    }

}
