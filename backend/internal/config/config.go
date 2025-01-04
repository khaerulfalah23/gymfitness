package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type config struct {
	DBPort 	   string `env:"DB_PORT"`
	DBHost     string `env:"DB_HOST"`
	DBUser     string `env:"DB_USER"`
	DBPassword string `env:"DB_PASSWORD"`
	DBName     string `env:"DB_NAME"`
	AppPort    string `env:"APP_PORT"`
}

var Cfg *config

func LoadConfig() {
	err := godotenv.Load()
	if err != nil {
		errMessage := fmt.Sprintf("err loading.env file: %v", err)
		panic(errMessage)
	}

	Cfg = &config{
		DBPort:     os.Getenv("DB_PORT"),
        DBHost:     os.Getenv("DB_HOST"),
        DBUser:     os.Getenv("DB_USER"),
        DBPassword: os.Getenv("DB_PASSWORD"),
        DBName:     os.Getenv("DB_NAME"),
        AppPort:    os.Getenv("APP_PORT"),
	}
}