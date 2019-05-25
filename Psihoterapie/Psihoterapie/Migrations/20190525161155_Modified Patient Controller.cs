using Microsoft.EntityFrameworkCore.Migrations;

namespace Psihoterapie.Migrations
{
    public partial class ModifiedPatientController : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Patient");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "Patient");

            migrationBuilder.RenameColumn(
                name: "StreetNumber",
                table: "Patient",
                newName: "Address");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Patient",
                newName: "StreetNumber");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Patient",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "Patient",
                nullable: true);
        }
    }
}
