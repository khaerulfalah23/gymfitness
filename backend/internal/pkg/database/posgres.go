package database

import (
	"fmt"

	"github.com/khaerulfalah23/gymfitness.git/internal/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func DatabaseConnection() *gorm.DB {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", config.Cfg.DBHost, config.Cfg.DBUser, config.Cfg.DBPassword, config.Cfg.DBName, config.Cfg.DBPort)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		errMessage := fmt.Sprintf("Failed to connect to database: %v", err)
		panic(errMessage)
	}

	// setup connection pool
	sqlDB, err := db.DB()
	if err != nil {
		errMessage := fmt.Sprintf("Failed to get sql.DB from gorm: %v", err)
		panic(errMessage)
	}

	sqlDB.SetMaxOpenConns(25)
	sqlDB.SetMaxIdleConns(10) 
	sqlDB.SetConnMaxLifetime(5 * 60)

	return db
}