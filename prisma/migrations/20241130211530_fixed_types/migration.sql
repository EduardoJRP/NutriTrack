/*
  Warnings:

  - You are about to alter the column `calories` on the `item_macro` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.
  - You are about to alter the column `carbohydrates` on the `item_macro` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.
  - You are about to alter the column `fats` on the `item_macro` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.
  - You are about to alter the column `protein` on the `item_macro` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.

*/
-- AlterTable
ALTER TABLE `item_macro` MODIFY `calories` DOUBLE NOT NULL,
    MODIFY `carbohydrates` DOUBLE NOT NULL,
    MODIFY `fats` DOUBLE NOT NULL,
    MODIFY `protein` DOUBLE NOT NULL;
