import {DocumentPickerResponse} from 'react-native-document-picker';
import {RecordingResponse} from 'react-native-record-screen';

class EvidenceModel {
  screenCapture: RecordingResponse | null = null;
  images: DocumentPickerResponse[] = [];
  videos: DocumentPickerResponse[] = [];
  audios: DocumentPickerResponse[] = [];
}

export default EvidenceModel;
