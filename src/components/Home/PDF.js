import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      row:{
         flexDirection: 'row'
      },
       section: {
        fontSize:14,
        fontWeight:500,
        marginLeft: 50,
        marginTop:20,
        marginBottom:10,    
          padding: 0,
          flexGrow: 1
        },
      title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
      },
      author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
      },
      subtitle: {
        fontSize: 18,
        margin: 12,
        textAlign:'center',
        fontFamily: 'Oswald'
      },
      text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
      image: {
        marginVertical: 15,
        marginHorizontal: 100,
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
      pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
      },
});

// Create Document Component
export default function PDF (props){
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });
    return  <Document>
    <Page size="A4" style={styles.page}>
    <View>
      <Text style={styles.header} fixed>
        ~ Please privde this PDF in the billing counter ~
      </Text>
       <Text style={styles.title} fixed>Dr. Oommens Eye Care Hosital</Text>
      <Text style={styles.author}>In the name we trust</Text>
      <Image
        style={styles.image}
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />
             
       <Text style={styles.subtitle}>
      Your Booking with us is confirmed.
      </Text> 
      <View style={styles.row}> 
       <View style={styles.section}>
          <Text>Booking ID: {props.details.BookingID}</Text>
        </View>
        <View style={styles.section}>
          <Text>Date of booking:{props.details.BookingDate}</Text>
        </View>
        
        </View> 
      <View style={styles.row}> 
      <View style={styles.section}>
          <Text>Patient Name : {props.details.PatientName}</Text>
        </View>
        <View style={styles.section}>
          <Text>Doctor Name : {props.details.DoctorName}</Text>
        </View>
        
        </View>
      <View>
      <Text style={styles.subtitle}>
      Please read the following rules carefully
      </Text>
      <Text style={styles.text}>
        dsdsdsdsd
      </Text>
      </View>
  
    </View>
    </Page>
  </Document>
}