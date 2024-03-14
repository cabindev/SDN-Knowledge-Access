/*
  Warnings:

  - You are about to drop the `_episodetomember` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_episodetomember` DROP FOREIGN KEY `_EpisodeToMember_A_fkey`;

-- DropForeignKey
ALTER TABLE `_episodetomember` DROP FOREIGN KEY `_EpisodeToMember_B_fkey`;

-- DropTable
DROP TABLE `_episodetomember`;

-- CreateTable
CREATE TABLE `EpisodeOnMember` (
    `episode_id` VARCHAR(191) NOT NULL,
    `member_id` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`episode_id`, `member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EpisodeOnMember` ADD CONSTRAINT `EpisodeOnMember_episode_id_fkey` FOREIGN KEY (`episode_id`) REFERENCES `episodes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EpisodeOnMember` ADD CONSTRAINT `EpisodeOnMember_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
