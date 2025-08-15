# TEDx Red Sea STEM - Event Management System

A comprehensive event management system for TEDxRedSeaSTEM with QR code ticket generation, email functionality, and event check-in capabilities.

## 🌟 Features

### Main Website (`index.html`)
- **Modern Design**: Beautiful, responsive design with TEDx branding
- **Interactive Elements**: Smooth animations and hover effects
- **Ticket Purchase**: Integrated checkout system with payment verification
- **Team Showcase**: Dynamic team member display with horizontal scrolling
- **Statistics Section**: Animated counters showing event statistics
- **Contact Form**: Functional contact form with Google Apps Script integration
- **Floating Action Button**: Quick access to QR code management

### QR Code Manager (`qr-manager.html`)
- **Ticket Generation**: Create unique QR codes for each attendee
- **Beautiful Ticket Design**: Professional ticket layout with event branding
- **Email Integration**: Send tickets directly to attendees via email
- **Ticket Management**: View, resend, and manage all generated tickets
- **Local Storage**: Persistent ticket data storage
- **Real-time Preview**: Live ticket preview as you fill out the form

### QR Code Scanner (`qr-scanner.html`)
- **Real-time Scanning**: Camera-based QR code scanning
- **Ticket Validation**: Verify ticket authenticity and validity
- **Check-in System**: Mark attendees as checked in or denied
- **Scan History**: Track all scanned tickets with timestamps
- **Multiple Camera Support**: Switch between front and back cameras
- **Offline Capable**: Works without internet connection

### Email System (`google-apps-script.js`)
- **Beautiful Email Templates**: Professional HTML email design
- **QR Code Integration**: Embed QR codes directly in emails
- **Event Information**: Include all relevant event details
- **Mobile Responsive**: Emails look great on all devices
- **Automated Sending**: Bulk email capabilities

## 🚀 Quick Start

### 1. Setup the Website
1. Upload all files to your web server
2. Ensure HTTPS is enabled (required for camera access)
3. Open `index.html` in your browser

### 2. Setup Google Apps Script for Email
1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Copy the code from `google-apps-script.js`
4. Deploy as a web app:
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set access to "Anyone"
   - Copy the deployment URL
5. Update the `EMAIL_SCRIPT_URL` in `qr-manager.html` with your deployment URL

### 3. Generate QR Codes
1. Navigate to `qr-manager.html`
2. Fill out the attendee information
3. Click "Generate QR Code"
4. Preview the ticket design
5. Click "Send Email" to send the ticket to the attendee

### 4. Event Check-in
1. Open `qr-scanner.html` on a device with a camera
2. Click "Start Scanner"
3. Allow camera access when prompted
4. Scan attendee QR codes
5. Click "Check In" or "Deny Entry" as appropriate

## 📁 File Structure

```
TEDx RedSea STEM High School/
├── index.html              # Main website
├── qr-manager.html         # QR code generation and management
├── qr-scanner.html         # QR code scanner for check-in
├── style.css              # Main stylesheet
├── google-apps-script.js  # Email functionality
├── README.md              # This file
└── images/                # Event images and logos
    ├── logo.png
    ├── Ahmed Afify.jpg
    ├── Basma Ashour.jpg
    └── ... (other team photos)
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern features
- **CSS3**: Advanced styling with animations and responsive design
- **JavaScript**: Interactive functionality and QR code handling
- **QRCode.js**: QR code generation library
- **HTML5-QRCode**: Camera-based QR code scanning
- **Google Apps Script**: Email sending and form processing
- **Font Awesome**: Icons and visual elements

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Mobile Support
- iOS Safari 12+
- Chrome Mobile 60+
- Samsung Internet 8+

## 📧 Email Setup

### Google Apps Script Configuration
1. **Authentication**: The script uses Gmail API for sending emails
2. **Quotas**: Free tier allows 100 emails/day, 1,500 emails/day for paid accounts
3. **Security**: Deploy with appropriate access controls
4. **Customization**: Modify email templates in the `createEmailTemplate` function

### Email Template Features
- Responsive design for all devices
- TEDx branding and colors
- QR code embedded directly in email
- Event information and instructions
- Professional footer with contact details

## 🔧 Customization

### Colors and Branding
Update the CSS variables in `style.css`:
```css
:root {
  --primary-color: #e11d48;
  --secondary-color: #be123c;
  --background-dark: #000;
  --background-light: #1a1a1a;
}
```

### Event Information
Update event details in:
- `index.html`: Event date, venue, pricing
- `qr-manager.html`: Ticket types and pricing
- `google-apps-script.js`: Email templates

### Team Members
Add or modify team members in `index.html`:
```html
<div class="team-card">
  <img src="images/team-member.jpg" alt="Member Name" class="team-img" />
  <h3 class="team-name">Member Name</h3>
  <p class="team-role">Role</p>
</div>
```

## 🔒 Security Considerations

### QR Code Security
- Each QR code contains a unique ticket ID
- QR codes are validated against stored ticket data
- Used tickets are marked to prevent reuse
- Date validation ensures tickets are only valid on event day

### Data Privacy
- Ticket data is stored locally in browser storage
- No personal data is sent to external servers (except email addresses)
- Email addresses are only used for ticket delivery

### Access Control
- QR manager should be password-protected in production
- Scanner access should be limited to authorized personnel
- Consider implementing user authentication for admin functions

## 📱 Mobile Optimization

### QR Scanner
- Optimized for mobile camera access
- Touch-friendly interface
- Responsive design for all screen sizes
- Offline functionality

### Email Templates
- Mobile-responsive design
- Optimized for email clients
- Fast loading with embedded images

## 🚨 Troubleshooting

### Common Issues

**Camera not working:**
- Ensure HTTPS is enabled
- Check camera permissions
- Try refreshing the page
- Test on different browsers

**QR codes not scanning:**
- Ensure good lighting
- Hold device steady
- Check QR code quality
- Verify camera focus

**Emails not sending:**
- Check Google Apps Script deployment
- Verify email quotas
- Test with different email addresses
- Check browser console for errors

**Tickets not generating:**
- Check browser console for errors
- Verify all form fields are filled
- Ensure QRCode.js library is loaded
- Test with different browsers

## 📞 Support

For technical support or questions:
- Email: info@tedxredseastem.com
- Check browser console for error messages
- Verify all dependencies are loaded correctly

## 📄 License

This project is created for TEDxRedSeaSTEM event management. All rights reserved.

---

**Powered by Red Sea STEM School Students** 🚀
