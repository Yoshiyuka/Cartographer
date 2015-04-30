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

namespace Cartographer
{

    public partial class Form1 : Form
    {
        [DllImport("user32.dll", CharSet = CharSet.Auto, ExactSpelling = true)]
        public static extern IntPtr GetDesktopWindow();
        [DllImport("user32.dll", CharSet = CharSet.Auto)]
        public static extern IntPtr FindWindow(
        [MarshalAs(UnmanagedType.LPTStr)] string lpClassName,
        [MarshalAs(UnmanagedType.LPTStr)] string lpWindowName);
        [DllImport("user32.dll")]
        public static extern IntPtr SetParent(
             IntPtr hWndChild,      // handle to window
             IntPtr hWndNewParent   // new parent window
           );
        [DllImport("user32.dll", SetLastError = true)]
        static extern int GetWindowLong(IntPtr hWnd, int nIndex);
        [DllImport("user32.dll", SetLastError = true)]
        static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);
        private const int GWL_EXSTYLE = -20;
        private const int WS_EX_TRANSPARENT = 0x20;


        public Form1()
        {  
            InitializeComponent();
            //int exstyle = GetWindowLong(this.Handle, GWL_EXSTYLE);
            //exstyle |= WS_EX_TRANSPARENT;
            //SetWindowLong(this.Handle, GWL_EXSTYLE, exstyle);
            //IntPtr hwndf = this.Handle;
            //IntPtr hwndParent = GetDesktopWindow();
            //SetParent(hwndf, hwndParent);
            //this.TopMost = true;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //listView1.View = View.Details;
            //listView1.GridLines = true;
            //listView1.FullRowSelect = false;

            //listView1.Columns.Add("Target", 100);
            //listView1.Columns.Add("Faction", 100);
            //listView1.Columns.Add("Affects", 100);

            //Add items in the listview
            //string[] arr = new string[4];
            //ListViewItem itm;

            //Add first item
            //arr[0] = "product_1";
            //arr[1] = "100";
            //arr[2] = "10";
            //itm = new ListViewItem(arr);
            //listView1.Items.Add(itm);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.ShowDialog();
        }
    }
}
