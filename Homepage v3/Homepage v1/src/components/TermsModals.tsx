import React from 'react';
import { X, ShieldAlert, Lock, CheckCircle, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh' | 'ms' | 'ta';
}

export const PrivacyPolicyModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-lg font-bold text-slate-800">
              {lang === 'zh' && "隐私政策"}
              {lang === 'ms' && "Dasar Privasi"}
              {lang === 'ta' && "தனியுரிமைக் கொள்கை"}
              {lang === 'en' && "Privacy Policy"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">
            {lang === 'zh' && "最后更新：2026年7月"}
            {lang === 'ms' && "Kemas Kini Terakhir: Julai 2026"}
            {lang === 'ta' && "கடைசி புதுப்பிப்பு: ஜூலை 2026"}
            {lang === 'en' && "Last Updated: July 2026"}
          </p>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              1. {lang === 'zh' ? "零数据收集政策" : lang === 'ms' ? "Dasar Sifar Pengumpulan Data" : lang === 'ta' ? "பூஜ்ஜிய தரவு சேகரிப்பு கொள்கை" : "Zero Data Collection Policy"}
            </h4>
            <p>
              {lang === 'zh' && "本平台是一项纯粹的患者教育服务。我们承诺不收集、不存储并不断开连接您的任何敏感个人健康信息。您在此页面上的所有交互（如语言选择、搜索查询以及折叠面板的点击）都完全留在您的浏览器本地。我们绝不会将您的数据上传到外部服务器。"}
              {lang === 'ms' && "Portal ini adalah perkhidmatan pendidikan pesakit sahaja. Kami komited untuk tidak mengumpul, menyimpan, atau berkongsi sebarang maklumat kesihatan peribadi anda. Semua interaksi anda pada halaman ini (seperti pilihan bahasa, carian, dan klik navigasi) diproses sepenuhnya dalam pelayar peranti anda sendiri."}
              {lang === 'ta' && "இந்த தளம் ஒரு நோயாளி கல்வி சேவை மட்டுமே. உங்களது எந்தவொரு முக்கியமான சுகாதாரத் தரவையும் சேகரிக்கவோ, சேமிக்கவோ அல்லது பகிரவோ மாட்டோம் என்பதில் நாங்கள் உறுதியாக உள்ளோம். இந்த பக்கத்தில் உங்களது அனைத்து தொடர்புகளும் (மொழித் தேர்வு, தேடல்கள் போன்றவை) உங்கள் சாதனத்திலேயே உள்ளூர செயல்படுத்தப்படுகின்றன."}
              {lang === 'en' && "This platform operates as a pure informational patient education service. We do not collect, store, track, or share any personal medical records or session inputs. All interactive choices, searches, and configurations are handled 100% locally within your browser and are deleted once you close this browser tab."}
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              2. {lang === 'zh' ? "医学免责声明" : lang === 'ms' ? "Penafian Perubatan" : lang === 'ta' ? "மருத்துவ மறுப்புரை" : "Clinical Disclaimer"}
            </h4>
            <p>
              {lang === 'zh' && "此处提供的信息旨在补充而非替代专业的医疗诊断、治疗、用药建议或与遗传咨询师的面对面咨询。本系统绝不用作自我诊断FH或心脏病风险的工具。"}
              {lang === 'ms' && "Maklumat yang dipaparkan adalah untuk sokongan pendidikan sahaja, bukan pengganti bagi diagnosis perubatan profesional, preskripsi ubat, atau konsultasi rasmi klinikal genetik."}
              {lang === 'ta' && "இங்கு வழங்கப்படும் தகவல்கள் கல்வி உதவிக்காக மட்டுமே, தொழில்முறை மருத்துவ நோயறிதல், மருந்து பரிந்துரை அல்லது மருத்துவ மரபணு ஆலோசனைக்கு மாற்றாகாது."}
              {lang === 'en' && "The information provided across this educational portal is synthesized from Singapore's official healthcare directories to help you prepare for your clinical appointment. It does not constitute binding clinical diagnosis, pharmacological advice, or genetic screening reports. All clinical decisions must be coordinated with your certified physician."}
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              3. {lang === 'zh' ? "第三方参考与链接" : lang === 'ms' ? "Rujukan & Pautan Pihak Ketiga" : lang === 'ta' ? "மூன்றாம் தரப்பு குறிப்புகள்" : "Third-Party Referrals & Web Links"}
            </h4>
            <p>
              {lang === 'zh' && "我们引用了新加坡卫生部、新加坡健康服务集团等可信资源，旨在为您提供完全客观的知识。本教育平台未获得任何商业机构的赞助。"}
              {lang === 'ms' && "Kami merujuk kepada sumber rasmi Singapura (MOH, SingHealth) untuk objektiviti klinikal. Kami tidak menaja atau mempromosikan sebarang makmal swasta komersial."}
              {lang === 'ta' && "சிங்கப்பூரின் அதிகாரப்பூர்வ மருத்துவ ஆதாரங்கள் (சுகாதார அமைச்சகம், சிங்ஹெல்த்) ஆகியவற்றிலிருந்து தகவல்கள் பெறப்பட்டுள்ளன."}
              {lang === 'en' && "References to official resources (Ministry of Health, SingHealth Genomic Medicine Centre) are designed to provide patients with non-commercial, objective, evidence-based details. This applet does not endorse private diagnostic laboratories."}
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50/50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white font-medium text-sm rounded-xl hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-hidden"
          >
            {lang === 'zh' && "关闭"}
            {lang === 'ms' && "Tutup"}
            {lang === 'ta' && "மூடு"}
            {lang === 'en' && "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsOfUseModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-display text-lg font-bold text-slate-800">
              {lang === 'zh' && "使用条款"}
              {lang === 'ms' && "Syarat Penggunaan"}
              {lang === 'ta' && "பயன்பாட்டு விதிமுறைகள்"}
              {lang === 'en' && "Terms of Use"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">
            {lang === 'zh' && "条款效力日期：2026年7月"}
            {lang === 'ms' && "Tarikh Kuat Kuasa: Julai 2026"}
            {lang === 'ta' && "அமலுக்கு வரும் தேதி: ஜூலை 2026"}
            {lang === 'en' && "Terms Effective Date: July 2026"}
          </p>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800">
              1. {lang === 'zh' ? "教育用途与适用范围" : lang === 'ms' ? "Tujuan Pendidikan Sahaja" : lang === 'ta' ? "கல்வி நோக்கம் மட்டுமே" : "Educational Purpose & Boundaries"}
            </h4>
            <p>
              {lang === 'zh' && "本网站由健康传播设计团队开发，专门用于为在新加坡医疗体系内被转介进行家族性高胆固醇血症（FH）基因筛查的患者提供补充教育。它不能充当主动诊断测试，也不承诺任何具体疗效。"}
              {lang === 'ms' && "Portal ini dibina untuk tujuan pendidikan tambahan bagi pesakit Singapura yang dirujuk untuk ujian genetik FH. Ia tidak boleh digunakan untuk penggantian nasihat perubatan rasmi."}
              {lang === 'ta' && "சிங்கப்பூர் சுகாதார அமைப்பில் எஃப்ஹெச் மரபணு சோதனைக்கு பரிந்துரைக்கப்படும் நோயாளிகளுக்கு கல்வி வழங்குவதற்காக மட்டுமே இந்த தளம் உருவாக்கப்பட்டது."}
              {lang === 'en' && "This portal is a public education utility deployed exclusively to support patient understanding regarding Familial Hypercholesterolaemia (FH) screening within Singapore's healthcare network. It must be utilized solely as an informational framework, not as a diagnostic aid."}
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800">
              2. {lang === 'zh' ? "无紧急医疗服务" : lang === 'ms' ? "Tiada Servis Kecemasan Perubatan" : lang === 'ta' ? "அவசர சேவை அல்ல" : "No Emergency Healthcare Dispatch"}
            </h4>
            <p>
              {lang === 'zh' && "本平台不设医生实时对话，也无法处理胸痛、呼吸急促等任何急性心血管紧急突发状况。如果您在新加坡遇到任何身体不适，请立刻拨打995或前往临近公立医院急诊室就诊。"}
              {lang === 'ms' && "Laman ini tiada sembang langsung atau diagnosis kecemasan. Untuk kecemasan serangan jantung atau sakit dada di Singapura, sila hubungi 995 dengan kadar segera."}
              {lang === 'ta' && "இந்த தளம் அவசர மருத்துவ ஆலோசனைக்கானது அல்ல. மாரடைப்பு அல்லது மார்பு வலி போன்ற அவசரநிலைகளுக்கு உடனடியாக 995 ஐ அழைக்கவும்."}
              {lang === 'en' && "This application does not provide real-time clinical support, medical chat, or emergency triage. If you are experiencing symptoms of a heart attack (such as sharp chest pain or breathlessness), call 995 immediately or go to the nearest hospital Emergency Department in Singapore."}
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-semibold text-slate-800">
              3. {lang === 'zh' ? "合法依规使用" : lang === 'ms' ? "Penggunaan yang Sah" : lang === 'ta' ? "முறையான பயன்பாடு" : "Acceptable & Lawful Use"}
            </h4>
            <p>
              {lang === 'zh' && "您同意仅将此页面用于合法的个人学习目的。您不得尝试通过自动化脚本、爬虫或其他技术手段攻击、瘫痪或劫持本服务。"}
              {lang === 'ms' && "Anda bersetuju untuk menggunakan laman ini untuk tujuan peribadi dan pendidikan sahaja. Sebarang cubaan menggodam atau menyalahgunakan sistem adalah dilarang."}
              {lang === 'ta' && "இந்த தளத்தை தனிப்பட்ட கல்வி நோக்கங்களுக்காக மட்டுமே பயன்படுத்த ஒப்புக்கொள்கிறீர்கள்."}
              {lang === 'en' && "You agree to utilize this application solely for legitimate personal reference. Attempting to inject harmful scripts, scrape medical data via automated programs, or disrupt the loading performance of the reverse proxy container is strictly prohibited under Singapore laws."}
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50/50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white font-medium text-sm rounded-xl hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-hidden"
          >
            {lang === 'zh' && "关闭"}
            {lang === 'ms' && "Tutup"}
            {lang === 'ta' && "மூடு"}
            {lang === 'en' && "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
