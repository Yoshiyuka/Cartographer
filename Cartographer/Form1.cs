using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SQLite;
using System.IO;

namespace Cartographer
{

    public partial class Form1 : Form
    {
        SQLiteConnection dbConnection;


        public Form1()
        {
            bool newDB = false;
            InitializeComponent();
            if (!System.IO.File.Exists("MyDatabase.sqlite"))
            {
                SQLiteConnection.CreateFile("MyDatabase.sqlite");
                newDB = true;
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("Database file already exists.");
                newDB = false;
            }

            dbConnection = new SQLiteConnection("Data Source=MyDatabase.sqlite;Version=3;");
            dbConnection.Open();

            //construct some fresh tables in our new database if the db doesn't already exist.
            if (newDB)
            {
                string query = "CREATE TABLE npc (id INTEGER PRIMARY KEY, name VARCHAR(32))";
                SQLiteCommand command = new SQLiteCommand(query, dbConnection);
                command.ExecuteNonQuery();
                query = "CREATE TABLE faction (id INTEGER PRIMARY KEY, name VARCHAR(16))";
                command = new SQLiteCommand(query, dbConnection);
                command.ExecuteNonQuery();
                query = "CREATE TABLE npc_factions (npc_id INT, faction_id INT)";
                command = new SQLiteCommand(query, dbConnection);
                command.ExecuteNonQuery();
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            try
            {
                using (StreamReader stream = new StreamReader("test.log"))
                {
                    String line = stream.ReadToEnd();
                    Console.WriteLine(line);
                }
            }
            catch (Exception exception)
            {
                System.Diagnostics.Debug.WriteLine("Could not read file.");
                System.Diagnostics.Debug.WriteLine(exception.Message);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "Text Files (.txt)|*.txt";
            openFileDialog1.FilterIndex = 1;
            
            openFileDialog1.ShowDialog();
        }

        private void openFileDialog1_FileOk(object sender, CancelEventArgs e)
        {
            FileInfo fileInfo = new FileInfo(openFileDialog1.FileName);
            FileStream fileStream = fileInfo.Open(FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            fileStream.Seek(-1024, SeekOrigin.End);

            byte[] bytes = new byte[1024];
            fileStream.Read(bytes, 0, 1024);
            string str = Encoding.Default.GetString(bytes);
            Console.WriteLine(str);
        }

        private void InsertButton_Click(object sender, EventArgs e)
        {
            //We have three tables: NPC, Faction, and NPC_Factions (relationship between them). 
            //NPC and Faction are a SET. That is, their entries are UNIQUE.
            //An NPC belonging to many factions is represented in NPC_Factions.
            //If either NPC or faction does not already have an entry when submitting data, insert these values into their respective tables.
            //If the NPC/Faction relationship does not already exist in NPC_Factions, insert this pair. Otherwise, it's duplicate data and should be ignored.

            string query = "INSERT INTO npc (name) VALUES ('" + NPCName.Text + "')";
            SQLiteCommand command = new SQLiteCommand(query, dbConnection);
            command.ExecuteNonQuery();
            query = "INSERT INTO faction (name) VALUES('" + FactionName.Text + "')";
            command = new SQLiteCommand(query, dbConnection);
            command.ExecuteNonQuery();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            string query = "SELECT * FROM npc ORDER BY name DESC";
            SQLiteCommand command = new SQLiteCommand(query, dbConnection);
            SQLiteDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                System.Diagnostics.Debug.WriteLine(reader["name"].ToString());
            }

            reader.Close();
        }
    }
}
