import React, {useState} from 'react';
import {utils} from '@react-native-firebase/app';
import storage, {FirebaseStorageTypes} from '@react-native-firebase/storage';
import {DocumentPickerResponse} from 'react-native-document-picker';

interface UploadFileResult {
  loading: boolean;
  loadingStatus: string;
  uploadSingleFile: (file: DocumentPickerResponse) => void;
  uploadMultipleFiles: (files: DocumentPickerResponse[]) => void;
  resultArray: FirebaseStorageTypes.TaskSnapshot[];
}

const useUploadFile = (): UploadFileResult => {
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('');
  const [results, setResults] = useState<FirebaseStorageTypes.TaskSnapshot[]>(
    [],
  );

  const uploadSingleFile = async (file: DocumentPickerResponse) => {
    console.log('file.name', file.name);
    setLoading(true);
    setLoadingStatus(`Subiendo archivo ${file.name}`);
    const timestamp = Date.now();
    const firestorePath = `${timestamp}${file.name}`;
    const localPath = `${utils.FilePath.CACHES_DIRECTORY}/${file.name}`;
    const result = await storage().ref(firestorePath).putFile(localPath);
    setResults([...results, result]);
  };

  const uploadMultipleFiles = async (files: DocumentPickerResponse[]) => {
    await Promise.all(files.map(file => uploadSingleFile(file)));
  };

  return {
    loading,
    loadingStatus,
    uploadSingleFile,
    uploadMultipleFiles,
    resultArray: results,
  };
};

export default useUploadFile;
