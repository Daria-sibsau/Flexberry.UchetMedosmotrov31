﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.UchetMedosmotrov3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// МедУчреждение.
    /// </summary>
    // *** Start programmer edit section *** (МедУчреждение CustomAttributes)

    // *** End programmer edit section *** (МедУчреждение CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class МедУчреждение : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private int fТелефон;
        
        private string fАдрес;
        
        // *** Start programmer edit section *** (МедУчреждение CustomMembers)

        // *** End programmer edit section *** (МедУчреждение CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (МедУчреждение.Адрес CustomAttributes)

        // *** End programmer edit section *** (МедУчреждение.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (МедУчреждение.Адрес Get start)

                // *** End programmer edit section *** (МедУчреждение.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (МедУчреждение.Адрес Get end)

                // *** End programmer edit section *** (МедУчреждение.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МедУчреждение.Адрес Set start)

                // *** End programmer edit section *** (МедУчреждение.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (МедУчреждение.Адрес Set end)

                // *** End programmer edit section *** (МедУчреждение.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (МедУчреждение.Наименование CustomAttributes)

        // *** End programmer edit section *** (МедУчреждение.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (МедУчреждение.Наименование Get start)

                // *** End programmer edit section *** (МедУчреждение.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (МедУчреждение.Наименование Get end)

                // *** End programmer edit section *** (МедУчреждение.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МедУчреждение.Наименование Set start)

                // *** End programmer edit section *** (МедУчреждение.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (МедУчреждение.Наименование Set end)

                // *** End programmer edit section *** (МедУчреждение.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (МедУчреждение.Телефон CustomAttributes)

        // *** End programmer edit section *** (МедУчреждение.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (МедУчреждение.Телефон Get start)

                // *** End programmer edit section *** (МедУчреждение.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (МедУчреждение.Телефон Get end)

                // *** End programmer edit section *** (МедУчреждение.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МедУчреждение.Телефон Set start)

                // *** End programmer edit section *** (МедУчреждение.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (МедУчреждение.Телефон Set end)

                // *** End programmer edit section *** (МедУчреждение.Телефон Set end)
            }
        }
    }
}
