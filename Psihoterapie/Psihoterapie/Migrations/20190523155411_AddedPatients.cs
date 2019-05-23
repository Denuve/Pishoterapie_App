using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Psihoterapie.Migrations
{
    public partial class AddedPatients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patient",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    StreetNumber = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    TheraphyReason = table.Column<string>(nullable: true),
                    MajorTrauma = table.Column<string>(nullable: true),
                    FamilyRelationship = table.Column<string>(nullable: true),
                    MedicalDisease = table.Column<string>(nullable: true),
                    Medication = table.Column<string>(nullable: true),
                    OtherInformations = table.Column<string>(nullable: true),
                    Appointment = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patient", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patient");
        }
    }
}
