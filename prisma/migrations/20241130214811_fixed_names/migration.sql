/*
  Warnings:

  - You are about to drop the column `protein` on the `item_macro` table. All the data in the column will be lost.
  - Added the required column `proteins` to the `Item_Macro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item_macro` DROP COLUMN `protein`,
    ADD COLUMN `proteins` DOUBLE NOT NULL;
