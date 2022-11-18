const {PDFDocument} = require('pdf-lib');

const fs = require('fs');


async function createPdf() {
    //initialize document

    const doc = await PDFDocument.create();

    // add a new page to pdf document

    const page = doc.addPage()

    page.drawText("Alan World")
    

    //save the pdf document to
    fs.writeFileSync("./output.pdf", await doc.save())
}

createPdf();