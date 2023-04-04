
CREATE DEFINER=`root`@`localhost` PROCEDURE `createproject`(
IN name VARCHAR(50),
IN description VARCHAR(255),
IN createdBy VARCHAR(36),
IN accessKey BLOB
)
BEGIN
      DECLARE duplicateName CONDITION FOR SQLSTATE '22012';
      DECLARE CONTINUE HANDLER FOR duplicateName
      RESIGNAL SET MESSAGE_TEXT = 'Error with duplicate name';
	IF( EXISTS(SELECT * FROM project WHERE project.name = name))
		THEN SIGNAL duplicateName;
	ELSE
		INSERT INTO project (
        name,
        description,
		createdBy,
		createdDate,
		accessKey
        )
        VALUES (
		name,
        description,
		createdBy,
		curdate(),
		accessKey
        );
        
	END IF;
END