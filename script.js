// ควบคุมสไลเดอร์และการเคลื่อนไหวของเข็ม
const slider = document.getElementById('currentSlider');
const pointer = document.getElementById('pointer');
const currentVal = document.getElementById('current-val');
const directionVal = document.getElementById('direction-val');
const angleVal = document.getElementById('angle-val');

slider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    const angle = val * 15; 
    
    pointer.style.transform = `rotate(${angle}deg)`;
    currentVal.textContent = `${val > 0 ? '+' : ''}${val.toFixed(1)} mA`;
    angleVal.textContent = `${Math.abs(Math.round(angle))}°`;
    
    if (val > 0) {
        directionVal.textContent = "→ ตามเข็ม";
        directionVal.className = "text-success";
    } else if (val < 0) {
        directionVal.textContent = "← ทวนเข็ม";
        directionVal.className = "text-warning";
    } else {
        directionVal.textContent = "• หยุดนิ่ง (สมดุล)";
        directionVal.className = "text-muted";
    }
});

// ข้อมูลคำอธิบายของอวตารสำหรับแต่ละส่วน
const explanations = {
    pointer: {
        title: "เข็มชี้ (Pointer)",
        desc: "ทำหน้าที่ชี้บอกค่ากระแสไฟฟ้าบนหน้าปัด โดยติดอยู่กับแกนหมุนของขดลวด เมื่อขดลวดขยับ เข็มก็จะขยับตามทันทีครับ!"
    },
    coil: {
        title: "ขดลวด (Coil)",
        desc: "หัวใจหลักของระบบ! เมื่อมีกระแสไฟฟ้าไหลผ่านขดลวดที่อยู่ในสนามแม่เหล็ก จะเกิดแรงแม่เหล็กทำให้ขดลวดเกิดการหมุนตัวครับ"
    },
    magnet: {
        title: "แม่เหล็กถาวร N-S (Permanent Magnet)",
        desc: "ทำหน้าที่สร้างสนามแม่เหล็กถาวรคงที่ เพื่อส่งแรงไปกระทำกับขดลวดตัวนำที่อยู่ตรงกลางครับ"
    },
    spring: {
        title: "สปริงก้นหอย (Hairspring)",
        desc: "ทำหน้าที่สร้าง 'แรงบิดต้าน' เพื่อดึงเข็มให้กลับมาที่ตำแหน่งศูนย์ (0) เสมอเมื่อไม่มีกระแสไฟฟ้า และช่วยสร้างจุดสมดุลทำให้เข็มหยุดนิ่งได้ครับ"
    }
};

// ระบบคลิกเพื่อเปลี่ยนข้อความในอวตาร
const cards = document.querySelectorAll('.comp-card.clickable');
const avatarTitle = document.getElementById('avatarTitle');
const avatarDesc = document.getElementById('avatarDesc');
const avatarBox = document.getElementById('avatarBox');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const partKey = card.getAttribute('data-part');
        if (explanations[partKey]) {
            avatarTitle.textContent = explanations[partKey].title;
            avatarDesc.textContent = explanations[partKey].desc;
            
            // เอฟเฟกต์กระพริบเบาๆ ที่กล่องอวตารเมื่อถูกคลิก
            avatarBox.style.transform = "scale(1.02)";
            setTimeout(() => {
                avatarBox.style.transform = "scale(1)";
            }, 150);
        }
    });
});
