interface Report {
    send(email: string): Promise<unknown>;
    print(): void;
}

interface ReportBuilder {
    addTitle(title: string): void;
    addContent(content: string): void;
    addChapter(chapterNumber: number, text: string): void;
    getResult(): Report;
}

class NcrReport {
    public text: string;

    constructor() {
        this.text = '';
    }

    send(email: string) {
        return fetch(email);
    };
    print(){
        console.log(this.text);
    };
}

class NcrReportBuilder implements ReportBuilder {
    report: NcrReport;

    constructor(report?: NcrReport) {
        this.report = report ?? new NcrReport();
    }

    addTitle() {
        this.report.text += 'title: Ncr report\n';
        return this;
    }

    addContent() {
        this.report.text += 'content: NCR\n';
        return this;
    }

    addChapter(chapterNumber, text) {
        this.report.text += `chapter #${chapterNumber}: ${text}\n`;
        return this;
    }

    getResult() {
        return this.report;
    }
}

const ncrReportBuilder = new NcrReportBuilder();
const report = ncrReportBuilder.addTitle().addContent().addChapter(1, 'start').addChapter(2, 'continue').addChapter(3, 'finish').getResult();
report.print();