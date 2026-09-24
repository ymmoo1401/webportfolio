/**
 * ==========================================================================
 * PORTFOLIO CONTROLLER
 * Filter projects by category & populate details inside interactive modal
 * ==========================================================================
 */

(function () {
  'use strict';

  // 1. Projects Data Definition (Creative Media student projects)
  const projectsData = {
    1: {
      title: "CyberPulse: Dynamic Brand Identity & Title Sequence",
      category: "Motion Graphic",
      categoryKey: "motion",
      image: "assets/images/project-1.svg",
      shortDesc: "การออกแบบอัตลักษณ์แบรนด์แบบเคลื่อนไหว และ Title Sequence สำหรับช่องเทคโนโลยี ด้วย After Effects & Cinema 4D",
      fullDesc: "โปรเจกต์งานออกแบบ Motion Identity และ Title Sequence ความยาว 30 วินาที ภายใต้แนวคิดพลังงานดิจิทัลแห่งอนาคต (Digital Energy of the Future) โดยผสมผสาน Kinetic Typography, 3D Abstract Elements และ Sound Design เชิงทดลอง เพื่อสร้างการจดจำแบรนด์ที่ทรงพลังและทันสมัย",
      tools: ["Adobe After Effects", "Cinema 4D", "Adobe Illustrator", "Soundly"],
      client: "CyberPulse Media Lab",
      duration: "3 สัปดาห์",
      role: "Motion Designer & Sound Editor"
    },
    2: {
      title: "Aurora Studio: Interactive Design System & Web Experience",
      category: "UI/UX Design & Web",
      categoryKey: "uiux",
      image: "assets/images/project-2.svg",
      shortDesc: "การออกแบบระบบ UI/UX Design System และเว็บไซต์สตรีมมิ่งเชิงประสบการณ์แบบ Interactive",
      fullDesc: "งานศึกษาและออกแบบประสบการณ์ผู้ใช้งาน (User Experience) และระบบ Design System ครบวงจร ตั้งแต่ User Persona, Wireframe, Interactive Prototype ใน Figma ไปจนถึงการเขียนโค้ด Responsive Landing Page ด้วย HTML5/CSS3/JS ที่เน้น Micro-interactions และความต่อเนื่องในการใช้งาน",
      tools: ["Figma", "HTML5", "CSS3 / Sass", "JavaScript", "UserTesting"],
      client: "Design Exploration Project",
      duration: "4 สัปดาห์",
      role: "UI/UX Researcher & Front-end Developer"
    },
    3: {
      title: "Echoes of Silence: Cinematic Short Film & Color Grading",
      category: "Video Production",
      categoryKey: "video",
      image: "assets/images/project-3.svg",
      shortDesc: "ภาพยนตร์สั้นเชิงทดลอง การจัดแสงแบบภาพยนตร์ และการย้อมสี (Color Grading) ด้วย DaVinci Resolve",
      fullDesc: "ผลงานกำกับภาพและตัดต่อภาพยนตร์สั้นความยาว 5 นาที เล่าเรื่องราวความโดดเดี่ยวในสังคมเมือง ถ่ายทำด้วยกล้อง Cinema 4K พร้อมกระบวนการ Color Grading แบบ Film Look ใน DaVinci Resolve และการมิกซ์เสียงรอบทิศทางเพื่อสร้างอารมณ์ร่วมให้ผู้ชม",
      tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Sony FX3 Camera", "Rode Audio"],
      client: "Creative Media Short Film Contest",
      duration: "1 เดือน",
      role: "Director of Photography & Colorist"
    },
    4: {
      title: "Neon Dimension: 3D Visual Art & Virtual Exhibition",
      category: "3D & Motion",
      categoryKey: "motion",
      image: "assets/images/project-4.svg",
      shortDesc: "การสร้างสรรค์สภาพแวดล้อม 3 มิติ และนิทรรศการเสมือนจริงในสไตล์ Cyberpunk Sci-Fi",
      fullDesc: "การจำลองโลกดิจิทัล 3 มิติ สไตล์ Cyberpunk เพื่อจัดแสดงผลงานศิลปะเสมือนจริง (Virtual Gallery) โดยเน้นการจัดแสงนีออน (Volumetric Lighting), Procedural Texturing และ Physics Simulation เพื่อเปิดโอกาสให้ผู้ชมสามารถสำรวจผลงานได้ในมุมมองแบบ 360 องศา",
      tools: ["Blender 3D", "Unreal Engine 5", "Substance Painter", "Photoshop"],
      client: "Virtual Reality Media Project",
      duration: "3 สัปดาห์",
      role: "3D Artist & Environment Designer"
    },
    5: {
      title: "Urban Lightscape: Conceptual Street & Studio Photography",
      category: "Photography",
      categoryKey: "photo",
      image: "assets/images/project-5.svg",
      shortDesc: "ซีรีส์ภาพถ่ายเชิงแนวคิด ศึกษาแสงและเงาในเวลากลางคืนของกรุงเทพมหานคร",
      fullDesc: "ชุดภาพถ่ายแนว Street & Conceptual Photography จำนวน 20 ภาพ ถ่ายทอดมิติทางอารมณ์ของผู้คนและสถาปัตยกรรมยามค่ำคืน การควบคุมความเร็วชัตเตอร์ รูรับแสง และการ Retouch รายละเอียดภาพด้วย Lightroom & Photoshop ในระดับงานตีพิมพ์",
      tools: ["Canon EOS R5", "50mm f/1.2L Lens", "Adobe Lightroom", "Photoshop"],
      client: "Urban Media Exhibition",
      duration: "2 สัปดาห์",
      role: "Photographer & Retoucher"
    },
    6: {
      title: "DreamSync: AI-Assisted Interactive Digital Art Experience",
      category: "AI & Interactive Media",
      categoryKey: "ai",
      image: "assets/images/project-6.svg",
      shortDesc: "การผสานเทคโนโลยี Generative AI เข้ากับการออกแบบสื่อปฏิสัมพันธ์บนเว็บและงานศิลปะดิจิทัล",
      fullDesc: "โปรเจกต์ทดลองนำโมเดล Generative AI (Image & Motion) มาผสานรวมกับเว็บอินเตอร์แอคทีฟ ให้ผู้ใช้สามารถป้อนคำสำคัญเพื่อแปลงเป็น visual rhythm และเพลงแบบไดนามิก สะท้อนอนาคตของสื่อนฤมิตยุคใหม่ที่มี AI เป็นผู้ร่วมสร้างสรรค์ (Co-creator)",
      tools: ["Midjourney v6", "Runway Gen-2", "JavaScript / Canvas API", "Web Audio API"],
      client: "Creative Technologist Thesis",
      duration: "4 สัปดาห์",
      role: "Creative Technologist & AI Prompt Artist"
    }
  };

  // 2. Filter Buttons Click Event
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.portfolio-item-col');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const itemCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 3. Project Detail Modal Handling
  const modalEl = document.getElementById('projectDetailModal');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalImg = document.getElementById('modalProjectImg');
  const modalDesc = document.getElementById('modalProjectDesc');
  const modalToolsList = document.getElementById('modalProjectTools');
  const modalClient = document.getElementById('modalProjectClient');
  const modalDuration = document.getElementById('modalProjectDuration');
  const modalRole = document.getElementById('modalProjectRole');

  // Listen for detail button clicks
  document.addEventListener('click', (e) => {
    const triggerBtn = e.target.closest('[data-project-id]');
    if (!triggerBtn) return;

    const projectId = triggerBtn.getAttribute('data-project-id');
    const project = projectsData[projectId];

    if (project && modalEl) {
      if (modalTitle) modalTitle.textContent = project.title;
      if (modalCategory) modalCategory.textContent = project.category;
      if (modalImg) {
        modalImg.src = project.image;
        modalImg.alt = project.title;
      }
      if (modalDesc) modalDesc.textContent = project.fullDesc;
      if (modalClient) modalClient.textContent = project.client;
      if (modalDuration) modalDuration.textContent = project.duration;
      if (modalRole) modalRole.textContent = project.role;

      // Populate tools badges
      if (modalToolsList) {
        modalToolsList.innerHTML = '';
        project.tools.forEach((tool) => {
          const badge = document.createElement('span');
          badge.className = 'tool-badge';
          badge.textContent = tool;
          modalToolsList.appendChild(badge);
        });
      }

      // Show Bootstrap modal
      if (window.bootstrap && window.bootstrap.Modal) {
        const bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        bsModal.show();
      }
    }
  });
})();
