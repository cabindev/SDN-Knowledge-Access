-- AlterTable
ALTER TABLE `members` ADD COLUMN `role` ENUM('normal', 'manager') NOT NULL DEFAULT 'normal';
