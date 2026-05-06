-- =========================================
-- PostgreSQL Schema (Refactored & Clean)
-- =========================================

BEGIN;

-- ======================
-- USERS
-- ======================
CREATE TABLE users (
    id INT PRIMARY KEY,
    access_group_id INT,
    contract_id INT,
    user_name VARCHAR(500),
    first_name VARCHAR(500),
    last_name VARCHAR(500),
    photo BYTEA,
    user_email VARCHAR(500),
    encoding BYTEA
);

-- ======================
-- ACCESS GROUP
-- ======================
CREATE TABLE access_group (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

ALTER TABLE users
ADD CONSTRAINT fk_user_access_group
FOREIGN KEY (access_group_id)
REFERENCES access_group(id);

-- ======================
-- CONTRACT
-- ======================
CREATE TABLE contract (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

ALTER TABLE users
ADD CONSTRAINT fk_user_contract
FOREIGN KEY (contract_id)
REFERENCES contract(id);

-- ======================
-- PROJECT STATUS & PRIORITY
-- ======================
CREATE TABLE project_status (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

CREATE TABLE priority (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

-- ======================
-- PROJECT
-- ======================
CREATE TABLE project (
    id INT PRIMARY KEY,
    project_status_id INT,
    project_priority_id INT,
    name VARCHAR(500),
    description TEXT,
    launch DATE,
    end_date DATE,
    clickable_cell VARCHAR(500)
);

ALTER TABLE project
ADD CONSTRAINT fk_project_status
FOREIGN KEY (project_status_id)
REFERENCES project_status(id);

ALTER TABLE project
ADD CONSTRAINT fk_project_priority
FOREIGN KEY (project_priority_id)
REFERENCES priority(id);

-- ======================
-- TEAM (User <-> Project)
-- ======================
CREATE TABLE team (
    id INT PRIMARY KEY,
    user_id INT,
    project_id INT,
    name VARCHAR(500)
);

ALTER TABLE team
ADD CONSTRAINT fk_team_user
FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE team
ADD CONSTRAINT fk_team_project
FOREIGN KEY (project_id)
REFERENCES project(id);

-- ======================
-- EPIC
-- ======================
CREATE TABLE epic (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

-- ======================
-- PRODUCT BACKLOG ITEM
-- ======================
CREATE TABLE product_backlog_item (
    id INT PRIMARY KEY,
    project_id INT,
    sprint_id INT,
    epic_id INT,
    status_id INT,
    priority_id INT,
    name VARCHAR(500),
    story_point INT,
    description TEXT,
    progression INT,
    clickable_cell VARCHAR(500),
    ready BOOLEAN,
    right_sprint VARCHAR(500)
);

ALTER TABLE product_backlog_item
ADD CONSTRAINT fk_pbi_project FOREIGN KEY (project_id) REFERENCES project(id);

ALTER TABLE product_backlog_item
ADD CONSTRAINT fk_pbi_epic FOREIGN KEY (epic_id) REFERENCES epic(id);

ALTER TABLE product_backlog_item
ADD CONSTRAINT fk_pbi_priority FOREIGN KEY (priority_id) REFERENCES priority(id);

-- ======================
-- SPRINT & STATUS
-- ======================
CREATE TABLE sprint_status (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

CREATE TABLE sprint (
    id INT PRIMARY KEY,
    project_id INT,
    sprint_status_id INT,
    name VARCHAR(500),
    duration INT,
    start_date DATE,
    end_date DATE,
    goal TEXT,
    progression TEXT,
    is_active BOOLEAN
);

ALTER TABLE sprint
ADD CONSTRAINT fk_sprint_project FOREIGN KEY (project_id) REFERENCES project(id);

ALTER TABLE sprint
ADD CONSTRAINT fk_sprint_status FOREIGN KEY (sprint_status_id) REFERENCES sprint_status(id);

-- ======================
-- TASK
-- ======================
CREATE TABLE task_status (
    id INT PRIMARY KEY,
    name VARCHAR(500)
);

CREATE TABLE flag (
    id INT PRIMARY KEY,
    name VARCHAR(500),
    color VARCHAR(500)
);

CREATE TABLE task (
    id INT PRIMARY KEY,
    name VARCHAR(500),
    product_backlog_item_id INT,
    assigned_to INT,
    start_date DATE,
    estimated_time INTERVAL,
    done_at TIMESTAMP,
    do_at TIMESTAMP,
    is_removed BOOLEAN,
    task_status_id INT,
    priority_id INT,
    flag_id INT
);

ALTER TABLE task
ADD CONSTRAINT fk_task_pbi FOREIGN KEY (product_backlog_item_id) REFERENCES product_backlog_item(id);

ALTER TABLE task
ADD CONSTRAINT fk_task_user FOREIGN KEY (assigned_to) REFERENCES users(id);

-- ======================
-- TODOLIST
-- ======================
CREATE TABLE todolist (
    id INT PRIMARY KEY,
    name VARCHAR(500),
    task_id INT REFERENCES task(id)
);

-- ======================
-- ATTENDANCE
-- ======================
CREATE TABLE attendance (
    id INT PRIMARY KEY,
    user_id INT,
    date DATE,
    checking_time TIME,
    type VARCHAR(255),
    delay INTERVAL,
    early_arrival INTERVAL,
    left_early INTERVAL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ======================
-- ABSENCE REQUEST
-- ======================
CREATE TABLE absence_request (
    id INT PRIMARY KEY,
    user_id INT,
    date_from DATE,
    date_to DATE,
    content TEXT,
    is_validate BOOLEAN,
    subject VARCHAR(255),
    part_of_day VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- ======================
-- VIEWS (DECLARATION ONLY)
-- ======================
-- morning_presence
-- afternoon_presence
-- presence

COMMIT;