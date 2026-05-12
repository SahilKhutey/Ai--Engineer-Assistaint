from fpdf import FPDF
import datetime

class EngineeringReportGenerator:
    def generate(self, analysis_data: dict, filename: str):
        pdf = FPDF()
        pdf.add_page()
        
        # Header
        pdf.set_font("Helvetica", "B", 24)
        pdf.set_text_color(59, 130, 246) # Electric Blue
        pdf.cell(0, 20, "Antigravity Engineering Report", ln=True, align="C")
        
        pdf.set_font("Helvetica", "", 10)
        pdf.set_text_color(100, 100, 100)
        pdf.cell(0, 10, f"Generated on: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", ln=True, align="C")
        pdf.ln(10)
        
        # Summary Section
        pdf.set_font("Helvetica", "B", 16)
        pdf.set_text_color(0, 0, 0)
        pdf.cell(0, 10, "1. Executive Summary", ln=True)
        pdf.set_font("Helvetica", "", 11)
        pdf.multi_cell(0, 7, analysis_data.get('explanation', 'No explanation provided.'))
        pdf.ln(5)
        
        # Risk Metrics
        pdf.set_font("Helvetica", "B", 16)
        pdf.cell(0, 10, "2. Structural Risk Assessment", ln=True)
        pdf.set_font("Helvetica", "", 11)
        pdf.cell(0, 10, f"Risk Level: {analysis_data.get('risk_level', 'Unknown').upper()}", ln=True)
        pdf.cell(0, 10, f"Confidence Score: {analysis_data.get('confidence', 0)*100:.1f}%", ln=True)
        
        ml_risk = analysis_data.get('ml_risk', {})
        pdf.cell(0, 10, f"ML Failure Probability: {ml_risk.get('failure_probability', 0)*100:.1f}%", ln=True)
        pdf.ln(5)
        
        # Geometry & Physics
        pdf.set_font("Helvetica", "B", 16)
        pdf.cell(0, 10, "3. Technical Specifications", ln=True)
        pdf.set_font("Helvetica", "", 11)
        
        geo = analysis_data.get('geo_insights', {})
        pdf.cell(0, 10, f"Topology: {geo.get('topology', 'N/A')}", ln=True)
        pdf.cell(0, 10, f"Characteristic Thickness: {geo.get('characteristic_thickness_mm', 0):.2f} mm", ln=True)
        pdf.ln(5)
        
        # Recommendations
        pdf.set_font("Helvetica", "B", 16)
        pdf.cell(0, 10, "4. Engineering Recommendations", ln=True)
        pdf.set_font("Helvetica", "", 11)
        for rec in analysis_data.get('recommendations', []):
            pdf.cell(0, 7, f"- {rec}", ln=True)
            
        # Footer
        pdf.set_y(-30)
        pdf.set_font("Helvetica", "I", 8)
        pdf.set_text_color(150, 150, 150)
        pdf.cell(0, 10, "Confidential - Antigravity AI Engineering Assistant", align="C")
        
        pdf.output(filename)
        return filename
