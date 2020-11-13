using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.UI;

public class GetUserTime : MonoBehaviour
{

    // Renovate Software LTD 2020 - In My Dreams

    Text timetext;
    Text datetext;

    public GameObject morning;
    public GameObject afternoon;
    public GameObject evening;
    public GameObject night;

    void Update()
    {
        Task.Delay(2000);

        string time;
        string date;

        time = DateTime.Now.ToString("HH:mm");
        date = DateTime.Today.ToString("dd/MM/yyyy");

        timetext = GameObject.Find("timetext").GetComponent<UnityEngine.UI.Text>();
        timetext.text = time;

        datetext = GameObject.Find("datetext").GetComponent<UnityEngine.UI.Text>();
        datetext.text = date;

        DateTime now = DateTime.Now;
        int newtime = now.Hour;

        if (newtime <= 11 && newtime > 1)
        {
            // Morning
            morning.SetActive(true);
            afternoon.SetActive(false);
            evening.SetActive(false);
            night.SetActive(false);
        }

        if (newtime <= 13 && newtime > 12)
        {
            // Afternoon
            morning.SetActive(false);
            afternoon.SetActive(true);
            evening.SetActive(false);
            night.SetActive(false);
        }

        if (newtime <= 18 && newtime > 14)
        {
            // Evening
            morning.SetActive(false);
            afternoon.SetActive(false);
            evening.SetActive(true);
            night.SetActive(false);
        }

        if (newtime <= 21 && newtime > 19)
        {
            // Night
            morning.SetActive(false);
            afternoon.SetActive(false);
            evening.SetActive(false);
            night.SetActive(true);
        }
    }
}
