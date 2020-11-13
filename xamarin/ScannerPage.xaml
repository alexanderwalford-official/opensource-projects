using Android.Views;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;
using ZXing.Net.Mobile.Forms;
using View = Android.Views.View;

namespace RenovateAuthenticator
{
    public partial class ScannerPage : ZXingScannerPage
    {
        public ScannerPage()
        {
            InitializeComponent();
        }

        private void ZXingScannerPage_OnScanResult(ZXing.Result result)
        {
            Device.BeginInvokeOnMainThread(async () =>
            {
                await Clipboard.SetTextAsync(result.Text);
                await Navigation.PushAsync(new EnterCode());
            });
        }
    }
}
