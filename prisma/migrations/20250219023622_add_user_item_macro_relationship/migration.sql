-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `bodyFatPercentage` DOUBLE NOT NULL,
    `age` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserItemMacro` (
    `userId` INTEGER NOT NULL,
    `itemMacroId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `itemMacroId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserItemMacro` ADD CONSTRAINT `UserItemMacro_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserItemMacro` ADD CONSTRAINT `UserItemMacro_itemMacroId_fkey` FOREIGN KEY (`itemMacroId`) REFERENCES `Item_Macro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
