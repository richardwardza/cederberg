import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { FormInput } from "../UserForm/lib";
import { part1, part2, part3, part4, part5, part6, part7 } from "./comments";

const URL = "localhost:3000";

export const modifyPdf = async (details: FormInput | undefined, comments: Comments) => {
  const url = `http://${URL}/IAPCommentandRegistrationSheet.pdf`;
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();

  
  const firstPage = pages[0];
  firstPage.drawText(`${details?.title}`, {
    x: 160,
    y: 630,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.firstName}`, {
    x: 160,
    y: 602,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.surname}`, {
    x: 160,
    y: 574,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.organisation}`, {
    x: 160,
    y: 548,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.position}`, {
    x: 160,
    y: 522,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.postalAddress}`, {
    x: 160,
    y: 496,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.city}`, {
    x: 160,
    y: 470,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.telephone}`, {
    x: 160,
    y: 440,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.fax}`, { x: 160, y: 414, size: 10, font: helveticaFont, color: rgb(0.1, 0.1, 0.1) });
  firstPage.drawText(`${details?.cell}`, {
    x: 160,
    y: 388,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });
  firstPage.drawText(`${details?.email}`, {
    x: 160,
    y: 366,
    size: 10,
    font: helveticaFont,
    color: rgb(0.1, 0.1, 0.1),
  });

  
  firstPage.drawText(`${comments.comment1}\n\r${comments.comment2}`, {
    x: 65,
    y: 305,
    size: 8,
    font: helveticaFont,
    maxWidth: 450,
    color: rgb(0.1, 0.1, 0.1),
  });

  const secondPage = pages[1];

  secondPage.drawText(
    `${comments.comment3}\n\n
    ${comments.comment4}
    ${comments.comment5}
    ${comments.comment6}
    ${comments.userComment || ""}
    ${comments.comment7}
    `, {
    x: 65,
    y: 800,
    size: 8,
    font: helveticaFont,
    maxWidth: 450,
    color: rgb(0.1, 0.1, 0.1),
  });


  const pdfBytes = await pdfDoc.save();
  downloadBlob(pdfBytes, "some-file.pdf", "application/pdf");
};

export const downloadURL = function (data: string, fileName: string) {
  const a = document.createElement("a");
  a.href = data;
  a.download = fileName;
  document.body.appendChild(a);
  // a.style = "display: none";
  a.click();
  a.remove();
};

export const downloadBlob = function (data: Uint8Array, fileName: string, mimeType: string) {
  const blob = new Blob([data], {
    type: mimeType,
  });
  const url = window.URL.createObjectURL(blob);
  downloadURL(url, fileName);
  setTimeout(function () {
    return window.URL.revokeObjectURL(url);
  }, 1000);
};

export const randomComment = (commentArray: string[]) => {
  const max = commentArray.length - 1;
  const index = Math.floor(Math.random() * (max + 1));
  return commentArray[index];
}


export type Comments = {
  comment1: string;
  comment2: string;
  comment3: string;
  comment4: string;
  comment5: string;
  comment6: string;
  comment7: string;
  userComment?:  string;
}

export const randomiseComments = () => {
  return {
    comment1: randomComment(part1),
    comment2: randomComment(part2),
    comment3: randomComment(part3),
    comment4: randomComment(part4),
    comment5: randomComment(part5),
    comment6: randomComment(part6),
    comment7: randomComment(part7),
  }
}