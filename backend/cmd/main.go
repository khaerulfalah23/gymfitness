package main

import (
	"fmt"

	"github.com/khaerulfalah23/gymfitness.git/internal/config"
	"github.com/khaerulfalah23/gymfitness.git/internal/pkg/database"
)

func main() {
	// configuration
	config.LoadConfig()

	// connection database
	_ = database.DatabaseConnection()

	fmt.Println("Hello, World! This is a Go program.")
}