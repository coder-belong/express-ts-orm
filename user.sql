/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80012 (8.0.12)
 Source Host           : localhost:3306
 Source Schema         : study_mysql

 Target Server Type    : MySQL
 Target Server Version : 80012 (8.0.12)
 File Encoding         : 65001

 Date: 01/11/2024 17:32:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `sex` int(11) NOT NULL COMMENT '性别 0:女 1：男',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'belong', 18, 1, '2024-09-28 09:56:10', '2024-09-28 09:56:10');
INSERT INTO `user` VALUES (3, 'test', 33, 1, '2024-11-01 09:09:13', '2024-11-01 09:09:13');
INSERT INTO `user` VALUES (4, 'Alice', 25, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (5, 'Bob', 30, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (6, 'Catherine', 22, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (7, 'David', 28, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (8, 'Eva', 26, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (9, 'Frank', 35, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (10, 'Grace', 27, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (11, 'Henry', 29, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (12, 'Irene', 24, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (13, 'Jack', 31, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (14, 'Kate', 23, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (15, 'Leo', 33, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (16, 'Mia', 21, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (17, 'Nina', 32, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (18, 'Oscar', 34, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (19, 'Paul', 28, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (20, 'Quinn', 27, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (21, 'Rachel', 26, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (22, 'Steve', 29, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (23, 'Tina', 30, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (24, 'Uma', 25, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (25, 'Victor', 31, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (26, 'Wendy', 22, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (27, 'Xander', 28, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (28, 'Yara', 24, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (29, 'Zane', 29, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (30, 'Ava', 23, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (31, 'Brian', 30, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (32, 'Clara', 25, 0, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (33, 'Dylan', 27, 1, '2024-11-01 09:18:32', '2024-11-01 09:18:32');
INSERT INTO `user` VALUES (34, 'dashachun', 22, 1, '2024-11-01 15:49:37', '2024-11-01 15:49:37');
INSERT INTO `user` VALUES (35, 'dashachun', 22, 1, '2024-11-01 15:51:02', '2024-11-01 15:51:02');
INSERT INTO `user` VALUES (36, 'dashachun1', 22, 1, '2024-11-01 17:08:26', '2024-11-01 17:08:26');
INSERT INTO `user` VALUES (37, 'dashachun2', 33, 0, '2024-11-01 17:08:26', '2024-11-01 17:08:26');
INSERT INTO `user` VALUES (38, 'dashachun', 222, 1, '2024-11-01 17:27:29', '2024-11-01 17:27:29');
INSERT INTO `user` VALUES (39, '111', 222, 1, '2024-11-01 17:27:43', '2024-11-01 17:27:43');

SET FOREIGN_KEY_CHECKS = 1;
