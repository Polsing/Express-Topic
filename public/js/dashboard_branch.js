
    function updateBranchOptions() {
        var selectedFaculty = document.getElementById("faculty").value;
        //console.log(selectedFaculty); 
        var branchSelect = document.getElementById("branch");
        branchSelect.innerHTML = "";

        switch (selectedFaculty) {
                case "SPU’S BRITISH COLLEGE":
                    addBranchOption("BUSINESS MANAGEMENT PROGRAMME");
                    
                break;

                case "SRIPATUM INTERNATIONAL COLLEGE":
                    addBranchOption("BBA. IN BUSINESS MANAGEMENT");
                    addBranchOption("B.A INTERNATIONAL AIRLINE BUSINESS");
                break;

                case "การบินและคมนาคม":
                    addBranchOption("การจัดการความปลอดภัยการบิน");
                
                break;

                case "การท่องเที่ยวและการบริการ":
                    addBranchOption("ธุรกิจการบิน");
                    addBranchOption("การจัดการบริการธุรกิจเรือสำราญ");
                    addBranchOption("การจัดการธุรกิจโรงแรมและการออกแบบประสบการณ์ท่องเที่ยว");
                break;

                case "ศิลปศาสตร์":
                    addBranchOption("ภาษาอังกฤษสื่อสารธุรกิจ");
                    addBranchOption("ภาษาอังกฤษสื่อสารธุรกิจ – การเป็นผู้ช่วยผู้บริหารระดับสูง");
                    addBranchOption("ภาษาญี่ปุ่นเพื่อการสื่อสารธุรกิจ");
                    addBranchOption("ภาษาญี่ปุ่นเพื่อการสื่อสารธุรกิจ – การตลาดดิจิทัลและการออกแบบกราฟิก");
                    addBranchOption("ภาษาจีนสื่อสารธุรกิจ");
                    addBranchOption("ภาษาจีนสื่อสารธุรกิจ – ธุรกิจพาณิชย์ดิจิทัล");
                break;

                case "นิเทศศาสตร์":
                    addBranchOption("การออกแบบสื่อสารออนไลน์");
                    addBranchOption("การออกแบบสื่อสารออนไลน์ – วิชาการออกแบบเนื้อหาเพื่อไลฟ์สตรีมมิ่ง");
                    addBranchOption("สื่อสารการแสดง");
                    addBranchOption("สื่อสารการแสดง – การแสดงสำหรับดิจิทัลแพลตฟอร์ม");
                    addBranchOption("ภาพยนตร์และสื่อดิจิทัล");
                    addBranchOption("ภาพยนตร์และสื่อดิจิทัล – ภาพยนตร์โฆษณาและไวรัล");
                break;

                case "บริหารธุรกิจ":
                    addBranchOption("ธุรกิจระหว่างประเทศ");
                    addBranchOption("ธุรกิจระหว่างประเทศ – นำเข้า – ส่งออกตลาดจีน – อาเซียน");
                    addBranchOption("การบริหารและการจัดการสมัยใหม่");
                    addBranchOption("การบริหารและการจัดการสมัยใหม่ – การเงินและการลงทุน");
                    addBranchOption("การตลาดดิจิทัล");
                    addBranchOption("การตลาดดิจิทัล – เจาะลึกดิจิทัลคอมเมิร์ซ");
                    addBranchOption("บริหารธุรกิจ");
                    addBranchOption("บริหารธุรกิจ – การเป็นเจ้าของธุรกิจ");
                break;

                case "โลจิสติกส์และซัพพลายเชน":
                    addBranchOption("การจัดการโลจิสติกส์และโซ่อุปทาน");
                    addBranchOption("การจัดการโลจิสติกส์และโซ่อุปทาน – โลจิสติกส์นำเข้า – ส่งออก");
                    addBranchOption("การจัดการโลจิสติกส์และโซ่อุปทาน + ธุรกิจระหว่างประเทศ");
                break;

                case "บัญชี":
                    addBranchOption("การบัญชี");
                    addBranchOption("การบัญชี – ภาษีและตรวจสอบ");
                    addBranchOption("การบัญชี ออนไลน์ผ่านโปรแกรม ZOOM");
                break;

                case "เทคโนโลยีสารสนเทศ":
                    addBranchOption("เทคโนโลยีสารสนเทศและการสื่อสาร");
                    addBranchOption("เทคโนโลยีสารสนเทศและการสื่อสาร – CYBER SECURITY");
                    addBranchOption("เทคโนโลยีสารสนเทศและการสื่อสาร ปริญญาตรีที่ 2 ภาควันเสาร์-อาทิตย์ (CYBER  SECURITY)");
                    addBranchOption("วิศวกรรมคอมพิวเตอร์");
                    addBranchOption("วิศวกรรมคอมพิวเตอร์ – AIOT");
                    addBranchOption("วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์");
                    addBranchOption("วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ – FULL STACK DEVELOPER");
                break;

                case "การออกแบบและสถาปัตยกรรมศาสตร์":
                    addBranchOption("สถาปัตยกรรม");
                    addBranchOption("การออกแบบภายใน");
                    addBranchOption("นวัตกรรมการออกแบบ");
                    addBranchOption("นวัตกรรมการออกแบบ – UX/UI DESIGN");
                break;

                case "ดิจิทัลมีเดีย":
                    addBranchOption("การออกแบบอินเทอร์แอคทีฟและเกม");
                    addBranchOption("การออกแบบกราฟิก");
                    addBranchOption("คอมพิวเตอร์แอนิเมชันและวิชวลเอฟเฟกต์");
                    addBranchOption("ดิจิทัลอาร์ตส์");
                break;

                case "นิติศาสตร์":
                    addBranchOption("นิติศาสตรบัณฑิต");
                    addBranchOption("นิติศาสตรบัณฑิต – กฎหมายธุรกิจดิจิทัล");
                break;

                case "วิศวกรรมศาสตร์":
                    addBranchOption("วิศวกรรมไฟฟ้า");
                    addBranchOption("วิศวกรรมไฟฟ้า – ระบบควบคุมอัตโนมัติและหุ่นยนต์");
                    addBranchOption("วิศวกรรมโยธา");
                    addBranchOption("วิศวกรรมโยธา – การจัดการงานก่อสร้าง");
                    addBranchOption("วิศวกรรมเครื่องกล");
                    addBranchOption("วิศวกรรมเครื่องกล – เทคโนโลยีอาคาร");
                    addBranchOption("วิศวกรรมเครื่องกล – เทคโนโลยียานยนต์สมัยใหม่");
                    addBranchOption("วิศวกรรมอุตสาหการและการจัดการ");
                    addBranchOption("วิศวกรรมอุตสาหการและการจัดการ – การจัดการวิศวกรรม");
                    addBranchOption("วิศวกรรมระบบราง (ทุนแลกเปลี่ยนเรียนที่จีน 1 ปี)");
                    addBranchOption("หลักสูตรวิศวกรรมโยธาทั้งหมดสามารถเรียนแผน 2 ปริญญากับ GRIFFITH UNIVERSITY ได้");
                break;

                case "การสร้างเจ้าของธุรกิจ":
                    addBranchOption("สหวิทยาการ เทคโนโลยีและนวัตกรรม");
                break;

                case "หลักสูตร 2 ปริญญา":
                    addBranchOption("ธุรกิจระหว่างประเทศและการบริหารและการจัดการสมัยใหม่");
                    addBranchOption("ธุรกิจระหว่างประเทศและบริหารธุรกิจ");
                    addBranchOption("การจัดการโลจิสติกส์และโซ่อุปทานและธุรกิจระหว่างประเทศ");
                break;
                
            
            default:
                addBranchOption("กรุณาเลือกคณะก่อน", "");
        }
    }

    function addBranchOption(text) {
        var option = document.createElement("option");
        option.text = text;
        document.getElementById("branch").add(option);
    }

