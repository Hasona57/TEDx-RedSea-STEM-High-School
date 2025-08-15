// Google Apps Script for TEDx Red Sea STEM QR Code Email System
// Deploy this as a web app to handle email sending

function doPost(e) {
  try {
    // Parse form data
    const formData = e.parameter;
    const { to, subject, attendeeName, attendeeEmail, attendeePhone, ticketType, seatNumber, eventDate, ticketId, qrCode } = formData;
    
    // Create ticket data object
    const ticketData = {
      id: ticketId,
      name: attendeeName,
      email: attendeeEmail,
      phone: attendeePhone,
      type: ticketType,
      seat: seatNumber,
      date: eventDate
    };
    
    // Create HTML email template
    const htmlBody = createEmailTemplate(ticketData, qrCode);
    
    // Send email
    GmailApp.sendEmail(to, subject, '', {
      htmlBody: htmlBody,
      name: 'TEDxRedSeaSTEM',
      replyTo: 'info@tedxredseastem.com'
    });
    
    // Return success response
    return ContentService
      .createTextOutput(`
        <html>
          <head>
            <title>Email Sent Successfully</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .success { color: #4ade80; font-size: 24px; margin-bottom: 20px; }
              .message { color: #666; }
            </style>
          </head>
          <body>
            <div class="success">✓ Email Sent Successfully!</div>
            <div class="message">The ticket has been sent to ${attendeeName} (${attendeeEmail})</div>
            <div class="message">You can close this window and return to the QR Manager.</div>
          </body>
        </html>
      `)
      .setMimeType(ContentService.MimeType.HTML);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(`
        <html>
          <head>
            <title>Error Sending Email</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              .error { color: #ef4444; font-size: 24px; margin-bottom: 20px; }
              .message { color: #666; }
            </style>
          </head>
          <body>
            <div class="error">✗ Error Sending Email</div>
            <div class="message">${error.toString()}</div>
            <div class="message">Please try again or contact support.</div>
          </body>
        </html>
      `)
      .setMimeType(ContentService.MimeType.HTML);
  }
}

function createEmailTemplate(ticketData, qrCode) {
  const eventDate = new Date(ticketData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your TEDxRedSeaSTEM Ticket</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #e11d48, #be123c);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 2rem;
          font-weight: bold;
        }
        .header p {
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
        }
        .content {
          padding: 2rem;
        }
        .ticket-info {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          border-left: 4px solid #e11d48;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e9ecef;
        }
        .info-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .info-label {
          font-weight: 600;
          color: #495057;
        }
        .info-value {
          color: #212529;
        }
        .qr-section {
          text-align: center;
          margin: 2rem 0;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .qr-code {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          display: inline-block;
          margin-bottom: 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .qr-code img {
          max-width: 200px;
          height: auto;
        }
        .instructions {
          background: #e3f2fd;
          border: 1px solid #2196f3;
          border-radius: 8px;
          padding: 1rem;
          margin: 1.5rem 0;
        }
        .instructions h3 {
          color: #1976d2;
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }
        .instructions ul {
          margin: 0;
          padding-left: 1.5rem;
        }
        .instructions li {
          margin-bottom: 0.25rem;
        }
        .footer {
          background: #343a40;
          color: white;
          padding: 1.5rem;
          text-align: center;
        }
        .footer p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }
        .social-links {
          margin-top: 1rem;
        }
        .social-links a {
          color: #e11d48;
          text-decoration: none;
          margin: 0 0.5rem;
          font-weight: 600;
        }
        .btn {
          display: inline-block;
          background: #e11d48;
          color: white;
          padding: 0.75rem 1.5rem;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 600;
          margin: 1rem 0;
        }
        .btn:hover {
          background: #be123c;
        }
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          .header {
            padding: 1.5rem;
          }
          .header h1 {
            font-size: 1.5rem;
          }
          .content {
            padding: 1rem;
          }
          .info-row {
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
                 <div class="header">
           <h1>Your TEDxRedSeaSTEM Ticket</h1>
           <p>Ideas Worth Spreading</p>
         </div>
        
        <div class="content">
          <h2>Hello ${ticketData.name}!</h2>
          <p>Thank you for registering for TEDxRedSeaSTEM! Your ticket has been generated and is ready for the event.</p>
          
          <div class="ticket-info">
            <div class="info-row">
              <span class="info-label">Ticket ID:</span>
              <span class="info-value">${ticketData.id}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Ticket Type:</span>
              <span class="info-value">${ticketData.type}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Seat Number:</span>
              <span class="info-value">${ticketData.seat}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Event Date:</span>
              <span class="info-value">${eventDate}</span>
            </div>
                         <div class="info-row">
               <span class="info-label">Venue:</span>
               <span class="info-value">قصر على باشا الكبير فى وسط البلد شارع قصر النيل</span>
             </div>
          </div>
          
                     <div class="qr-section">
             <h3>Your QR Code Ticket</h3>
             <p>Present this QR code at the event entrance for quick check-in:</p>
            <div class="qr-code">
              <img src="${qrCode}" alt="QR Code Ticket" />
            </div>
            <p><strong>Save this email or screenshot the QR code for easy access!</strong></p>
          </div>
          
                     <div class="instructions">
             <h3>Important Information</h3>
            <ul>
              <li>Please arrive 30 minutes before the event starts</li>
              <li>Bring a valid ID for verification</li>
              <li>This ticket is non-transferable</li>
              <li>QR code can only be used once</li>
              <li>Dress code: Business casual</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 2rem 0;">
            <a href="https://tedxredseastem.com" class="btn">Visit Event Website</a>
          </div>
          
          <p style="color: #666; font-size: 0.9rem;">
            If you have any questions, please contact us at 
            <a href="mailto:info@tedxredseastem.com">info@tedxredseastem.com</a>
          </p>
        </div>
        
        <div class="footer">
          <p><strong>TEDxRedSeaSTEM</strong></p>
          <p>Ideas Worth Spreading</p>
          <p>Powered by Red Sea STEM School Students</p>
          <div class="social-links">
            <a href="#">Website</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Twitter</a> | 
            <a href="#">LinkedIn</a>
          </div>
          <p style="margin-top: 1rem; font-size: 0.8rem; opacity: 0.8;">
            This is an automated email. Please do not reply to this message.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Function to test email sending (for development)
function testEmailSending() {
  const testData = {
    to: 'test@example.com',
    subject: 'Test TEDx Ticket',
    ticketData: {
      id: 'TEDX-TEST-123',
      name: 'Test User',
      email: 'test@example.com',
      phone: '+201234567890',
      type: 'Premium Ticket - EGP 300',
      seat: 'A-15',
      date: '2025-08-15',
      generatedAt: new Date().toISOString()
    },
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  };
  
  const result = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
  
  Logger.log(result.getContent());
}

// Function to set up email triggers (optional)
function setupEmailTriggers() {
  // This function can be used to set up automatic email reminders
  // For example, sending reminder emails 24 hours before the event
  
  const eventDate = new Date('2025-08-15');
  const reminderDate = new Date(eventDate.getTime() - 24 * 60 * 60 * 1000); // 24 hours before
  
  // Create a trigger to send reminder emails
  ScriptApp.newTrigger('sendReminderEmails')
    .timeBased()
    .at(reminderDate)
    .create();
}

// Function to send reminder emails (optional)
function sendReminderEmails() {
  // This function would send reminder emails to all registered attendees
  // You would need to store attendee data in a spreadsheet or database
  
  Logger.log('Sending reminder emails...');
  // Implementation would go here
}

// Function to handle CORS for web app deployment
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'TEDxRedSeaSTEM Email Service is running',
      version: '1.0.0'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
