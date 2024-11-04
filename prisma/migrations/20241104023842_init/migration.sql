-- CreateTable
CREATE TABLE `Item_Macro` (
    `name` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `calories` DECIMAL(10, 2) NOT NULL,
    `carbohydrates` DECIMAL(10, 2) NOT NULL,
    `fats` DECIMAL(10, 2) NOT NULL,
    `protein` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
