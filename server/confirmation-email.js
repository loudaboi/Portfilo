function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildConfirmationEmail(confirmationUrl) {
  const safeUrl = escapeHtml(confirmationUrl);
  const subject = "Confirm your Portfilo Brief subscription";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${subject}</title>
    <style>
      @media only screen and (max-width: 640px) {
        .email-shell { width: 100% !important; }
        .email-pad { padding-left: 24px !important; padding-right: 24px !important; }
        .email-title { font-size: 38px !important; line-height: 39px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#f4f0e8;color:#171614;-webkit-text-size-adjust:100%;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      One click to finish signing up.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f4f0e8;border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" class="email-shell" style="width:640px;max-width:640px;border-collapse:collapse;">
            <tr>
              <td class="email-pad" style="padding:48px 40px 20px;font-family:Arial,Helvetica,sans-serif;">
                <div style="font-size:28px;line-height:30px;font-weight:700;letter-spacing:-1.4px;">
                  <span style="color:#171614;">Port</span><span style="color:#0050a4;">fi</span><span style="color:#b42318;">lo</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:0 40px;">
                <div style="height:3px;line-height:3px;background:#0050a4;font-size:0;">&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:34px 40px 0;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:16px;letter-spacing:1.1px;color:#0050a4;text-transform:uppercase;">
                PORTFILO BRIEF / CONFIRMATION
              </td>
            </tr>
            <tr>
              <td class="email-pad email-title" style="padding:18px 40px 0;font-family:Arial,Helvetica,sans-serif;font-size:48px;line-height:48px;font-weight:700;letter-spacing:-2.4px;color:#171614;">
                Confirm your subscription.
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:26px 40px 0;font-family:Georgia,'Times New Roman',serif;font-size:19px;line-height:30px;color:#3e3b36;">
                Click below to finish signing up for Portfilo Brief.
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:32px 40px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td bgcolor="#0050a4" style="background:#0050a4;">
                      <a href="${safeUrl}" style="display:inline-block;padding:16px 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:18px;font-weight:700;color:#ffffff;text-decoration:none;">Confirm subscription&nbsp;&nbsp;↗</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:26px 40px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#69655e;">
                If you did not sign up, you can ignore this email.
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:54px 40px 0;">
                <div style="height:1px;line-height:1px;background:#cbc5bb;font-size:0;">&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td class="email-pad" style="padding:18px 40px 48px;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:17px;color:#69655e;">
                Portfilo Brief<br>
                This link expires in 24 hours.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `PORTFILO BRIEF / CONFIRMATION

Confirm your subscription.

Click the link below to finish signing up for Portfilo Brief:
${confirmationUrl}

If you did not sign up, you can ignore this email.

This link expires in 24 hours.`;

  return { subject, html, text };
}
