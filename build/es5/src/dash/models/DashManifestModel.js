/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}var _streamingConstantsConstants=require('../../streaming/constants/Constants');var _streamingConstantsConstants2=_interopRequireDefault(_streamingConstantsConstants);var _constantsDashConstants=require('../constants/DashConstants');var _constantsDashConstants2=_interopRequireDefault(_constantsDashConstants);var _voRepresentation=require('../vo/Representation');var _voRepresentation2=_interopRequireDefault(_voRepresentation);var _voAdaptationSet=require('../vo/AdaptationSet');var _voAdaptationSet2=_interopRequireDefault(_voAdaptationSet);var _voPeriod=require('../vo/Period');var _voPeriod2=_interopRequireDefault(_voPeriod);var _voMpd=require('../vo/Mpd');var _voMpd2=_interopRequireDefault(_voMpd);var _voUTCTiming=require('../vo/UTCTiming');var _voUTCTiming2=_interopRequireDefault(_voUTCTiming);var _voEvent=require('../vo/Event');var _voEvent2=_interopRequireDefault(_voEvent);var _voBaseURL=require('../vo/BaseURL');var _voBaseURL2=_interopRequireDefault(_voBaseURL);var _voEventStream=require('../vo/EventStream');var _voEventStream2=_interopRequireDefault(_voEventStream);var _streamingUtilsObjectUtils=require('../../streaming/utils/ObjectUtils');var _streamingUtilsObjectUtils2=_interopRequireDefault(_streamingUtilsObjectUtils);var _streamingUtilsURLUtils=require('../../streaming/utils/URLUtils');var _streamingUtilsURLUtils2=_interopRequireDefault(_streamingUtilsURLUtils);var _coreFactoryMaker=require('../../core/FactoryMaker');var _coreFactoryMaker2=_interopRequireDefault(_coreFactoryMaker);function DashManifestModel(config){config = config || {};var instance=undefined;var context=this.context;var urlUtils=(0,_streamingUtilsURLUtils2['default'])(context).getInstance();var mediaController=config.mediaController;var timelineConverter=config.timelineConverter;var adapter=config.adapter;var PROFILE_DVB='urn:dvb:dash:profile:dvb-dash:2014';var isInteger=Number.isInteger || function(value){return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;};function getIsTypeOf(adaptation,type){var i=undefined,len=undefined,representation=undefined,col=undefined,mimeTypeRegEx=undefined,codecs=undefined;var result=false;var found=false;if(!adaptation){throw new Error('adaptation is not defined');}if(!type){throw new Error('type is not defined');}if(adaptation.hasOwnProperty('ContentComponent_asArray')){col = adaptation.ContentComponent_asArray;}mimeTypeRegEx = type !== _streamingConstantsConstants2['default'].TEXT?new RegExp(type):new RegExp('(vtt|ttml)');if(adaptation.Representation_asArray && adaptation.Representation_asArray.length && adaptation.Representation_asArray.length > 0 && adaptation.Representation_asArray[0].hasOwnProperty(_constantsDashConstants2['default'].CODECS)){ // Just check the start of the codecs string
codecs = adaptation.Representation_asArray[0].codecs;if(codecs.search(_streamingConstantsConstants2['default'].STPP) === 0 || codecs.search(_streamingConstantsConstants2['default'].WVTT) === 0){return type === _streamingConstantsConstants2['default'].FRAGMENTED_TEXT;}}if(col){if(col.length > 1){return type === _streamingConstantsConstants2['default'].MUXED;}else if(col[0] && col[0].contentType === type){result = true;found = true;}}if(adaptation.hasOwnProperty(_constantsDashConstants2['default'].MIME_TYPE)){result = mimeTypeRegEx.test(adaptation.mimeType);found = true;} // couldn't find on adaptationset, so check a representation
if(!found){i = 0;len = adaptation.Representation_asArray && adaptation.Representation_asArray.length?adaptation.Representation_asArray.length:0;while(!found && i < len) {representation = adaptation.Representation_asArray[i];if(representation.hasOwnProperty(_constantsDashConstants2['default'].MIME_TYPE)){result = mimeTypeRegEx.test(representation.mimeType);found = true;}i++;}}return result;}function getIsAudio(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].AUDIO);}function getIsVideo(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].VIDEO);}function getIsFragmentedText(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].FRAGMENTED_TEXT);}function getIsText(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].TEXT);}function getIsMuxed(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].MUXED);}function getIsImage(adaptation){return getIsTypeOf(adaptation,_streamingConstantsConstants2['default'].IMAGE);}function getIsTextTrack(type){return type === 'text/vtt' || type === 'application/ttml+xml';}function getLanguageForAdaptation(adaptation){var lang='';if(adaptation && adaptation.hasOwnProperty(_constantsDashConstants2['default'].LANG)){ //Filter out any other characters not allowed according to RFC5646
lang = adaptation.lang.replace(/[^A-Za-z0-9-]/g,'');}return lang;}function getViewpointForAdaptation(adaptation){return adaptation && adaptation.hasOwnProperty(_constantsDashConstants2['default'].VIEWPOINT)?adaptation.Viewpoint:null;}function getRolesForAdaptation(adaptation){return adaptation && adaptation.hasOwnProperty(_constantsDashConstants2['default'].ROLE_ASARRAY)?adaptation.Role_asArray:[];}function getAccessibilityForAdaptation(adaptation){return adaptation && adaptation.hasOwnProperty(_constantsDashConstants2['default'].ACCESSIBILITY_ASARRAY)?adaptation.Accessibility_asArray:[];}function getAudioChannelConfigurationForAdaptation(adaptation){return adaptation && adaptation.hasOwnProperty(_constantsDashConstants2['default'].AUDIOCHANNELCONFIGURATION_ASARRAY)?adaptation.AudioChannelConfiguration_asArray:[];}function getIsMain(adaptation){return getRolesForAdaptation(adaptation).filter(function(role){return role.value === _constantsDashConstants2['default'].MAIN;})[0];}function getRepresentationSortFunction(){return function(a,b){return a.bandwidth - b.bandwidth;};}function processAdaptation(realAdaptation){if(realAdaptation && realAdaptation.Representation_asArray !== undefined && realAdaptation.Representation_asArray !== null){realAdaptation.Representation_asArray.sort(getRepresentationSortFunction());}return realAdaptation;}function getAdaptationForId(id,manifest,periodIndex){var realAdaptations=manifest && manifest.Period_asArray && isInteger(periodIndex)?manifest.Period_asArray[periodIndex]?manifest.Period_asArray[periodIndex].AdaptationSet_asArray:[]:[];var i=undefined,len=undefined;for(i = 0,len = realAdaptations.length;i < len;i++) {if(realAdaptations[i].hasOwnProperty(_constantsDashConstants2['default'].ID) && realAdaptations[i].id === id){return realAdaptations[i];}}return null;}function getAdaptationForIndex(index,manifest,periodIndex){var realAdaptations=manifest && manifest.Period_asArray && isInteger(periodIndex)?manifest.Period_asArray[periodIndex]?manifest.Period_asArray[periodIndex].AdaptationSet_asArray:null:null;if(realAdaptations && isInteger(index)){return realAdaptations[index];}else {return null;}}function getIndexForAdaptation(realAdaptation,manifest,periodIndex){var realAdaptations=manifest && manifest.Period_asArray && isInteger(periodIndex)?manifest.Period_asArray[periodIndex]?manifest.Period_asArray[periodIndex].AdaptationSet_asArray:[]:[];var len=realAdaptations.length;if(realAdaptation){for(var i=0;i < len;i++) {var objectUtils=(0,_streamingUtilsObjectUtils2['default'])(context).getInstance();if(objectUtils.areEqual(realAdaptations[i],realAdaptation)){return i;}}}return -1;}function getAdaptationsForType(manifest,periodIndex,type){var realAdaptationSet=manifest && manifest.Period_asArray && isInteger(periodIndex)?manifest.Period_asArray[periodIndex]?manifest.Period_asArray[periodIndex].AdaptationSet_asArray:[]:[];var i=undefined,len=undefined;var adaptations=[];for(i = 0,len = realAdaptationSet.length;i < len;i++) {if(getIsTypeOf(realAdaptationSet[i],type)){adaptations.push(processAdaptation(realAdaptationSet[i]));}}return adaptations;}function getAdaptationForType(manifest,periodIndex,type,streamInfo){var adaptations=getAdaptationsForType(manifest,periodIndex,type);if(!adaptations || adaptations.length === 0)return null;if(adaptations.length > 1 && streamInfo){var currentTrack=mediaController.getCurrentTrackFor(type,streamInfo);var allMediaInfoForType=adapter.getAllMediaInfoForType(streamInfo,type);if(currentTrack){for(var i=0,ln=adaptations.length;i < ln;i++) {if(mediaController.isTracksEqual(currentTrack,allMediaInfoForType[i])){return adaptations[i];}}}for(var i=0,ln=adaptations.length;i < ln;i++) {if(getIsMain(adaptations[i])){return adaptations[i];}}}return adaptations[0];}function getCodec(adaptation,representationId,addResolutionInfo){if(adaptation && adaptation.Representation_asArray && adaptation.Representation_asArray.length > 0){var representation=isInteger(representationId) && representationId >= 0 && representationId < adaptation.Representation_asArray.length?adaptation.Representation_asArray[representationId]:adaptation.Representation_asArray[0];var codec=representation.mimeType + ';codecs="' + representation.codecs + '"';if(addResolutionInfo && representation.width !== undefined){codec += ';width="' + representation.width + '";height="' + representation.height + '"';}return codec;}return null;}function getMimeType(adaptation){return adaptation && adaptation.Representation_asArray && adaptation.Representation_asArray.length > 0?adaptation.Representation_asArray[0].mimeType:null;}function getKID(adaptation){if(!adaptation || !adaptation.hasOwnProperty(_constantsDashConstants2['default'].CENC_DEFAULT_KID)){return null;}return adaptation[_constantsDashConstants2['default'].CENC_DEFAULT_KID];}function getContentProtectionData(adaptation){if(!adaptation || !adaptation.hasOwnProperty(_constantsDashConstants2['default'].CONTENTPROTECTION_ASARRAY) || adaptation.ContentProtection_asArray.length === 0){return null;}return adaptation.ContentProtection_asArray;}function getIsDynamic(manifest){var isDynamic=false;if(manifest && manifest.hasOwnProperty('type')){isDynamic = manifest.type === _constantsDashConstants2['default'].DYNAMIC;}return isDynamic;}function hasProfile(manifest,profile){var has=false;if(manifest && manifest.profiles && manifest.profiles.length > 0){has = manifest.profiles.indexOf(profile) !== -1;}return has;}function getIsDVB(manifest){return hasProfile(manifest,PROFILE_DVB);}function getDuration(manifest){var mpdDuration=undefined; //@mediaPresentationDuration specifies the duration of the entire Media Presentation.
//If the attribute is not present, the duration of the Media Presentation is unknown.
if(manifest && manifest.hasOwnProperty(_constantsDashConstants2['default'].MEDIA_PRESENTATION_DURATION)){mpdDuration = manifest.mediaPresentationDuration;}else {mpdDuration = Number.MAX_SAFE_INTEGER || Number.MAX_VALUE;}return mpdDuration;}function getBandwidth(representation){return representation && representation.bandwidth?representation.bandwidth:NaN;}function getManifestUpdatePeriod(manifest){var latencyOfLastUpdate=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var delay=NaN;if(manifest && manifest.hasOwnProperty(_constantsDashConstants2['default'].MINIMUM_UPDATE_PERIOD)){delay = manifest.minimumUpdatePeriod;}return isNaN(delay)?delay:Math.max(delay - latencyOfLastUpdate,1);}function getRepresentationCount(adaptation){return adaptation && adaptation.Representation_asArray && adaptation.Representation_asArray.length?adaptation.Representation_asArray.length:0;}function getBitrateListForAdaptation(realAdaptation){if(!realAdaptation || !realAdaptation.Representation_asArray || !realAdaptation.Representation_asArray.length)return null;var processedRealAdaptation=processAdaptation(realAdaptation);var realRepresentations=processedRealAdaptation.Representation_asArray;return realRepresentations.map(function(realRepresentation){return {bandwidth:realRepresentation.bandwidth,width:realRepresentation.width || 0,height:realRepresentation.height || 0,scanType:realRepresentation.scanType || null};});}function getEssentialPropertiesForRepresentation(realRepresentation){if(!realRepresentation || !realRepresentation.EssentialProperty_asArray || !realRepresentation.EssentialProperty_asArray.length)return null;return realRepresentation.EssentialProperty_asArray.map(function(prop){return {schemeIdUri:prop.schemeIdUri,value:prop.value};});}function getRepresentationFor(index,adaptation){return adaptation && adaptation.Representation_asArray && adaptation.Representation_asArray.length > 0 && isInteger(index)?adaptation.Representation_asArray[index]:null;}function getRealAdaptationFor(voAdaptation){if(voAdaptation && voAdaptation.period && isInteger(voAdaptation.period.index)){var periodArray=voAdaptation.period.mpd.manifest.Period_asArray[voAdaptation.period.index];if(periodArray && periodArray.AdaptationSet_asArray && isInteger(voAdaptation.index)){return processAdaptation(periodArray.AdaptationSet_asArray[voAdaptation.index]);}}}function isLastRepeatAttributeValid(segmentTimeline){var s=segmentTimeline.S_asArray[segmentTimeline.S_asArray.length - 1];return !s.hasOwnProperty('r') || s.r >= 0;}function getUseCalculatedLiveEdgeTimeForAdaptation(voAdaptation){var realRepresentation=getRealAdaptationFor(voAdaptation).Representation_asArray[0];var segmentInfo=undefined;if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_LIST)){segmentInfo = realRepresentation.SegmentList;return segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TIMELINE)?isLastRepeatAttributeValid(segmentInfo.SegmentTimeline):true;}else if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TEMPLATE)){segmentInfo = realRepresentation.SegmentTemplate;if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TIMELINE)){return isLastRepeatAttributeValid(segmentInfo.SegmentTimeline);}}return false;}function getRepresentationsForAdaptation(voAdaptation){var voRepresentations=[];var processedRealAdaptation=getRealAdaptationFor(voAdaptation);var segmentInfo=undefined;var baseUrl=undefined; // TODO: TO BE REMOVED. We should get just the baseUrl elements that affects to the representations
// that we are processing. Making it works properly will require much further changes and given
// parsing base Urls parameters is needed for our ultra low latency examples, we will
// keep this "tricky" code until the real (and good) solution comes
if(voAdaptation && voAdaptation.period && isInteger(voAdaptation.period.index)){var baseUrls=getBaseURLsFromElement(voAdaptation.period.mpd.manifest);if(baseUrls){baseUrl = baseUrls[0];}}if(processedRealAdaptation && processedRealAdaptation.Representation_asArray){for(var i=0,len=processedRealAdaptation.Representation_asArray.length;i < len;++i) {var realRepresentation=processedRealAdaptation.Representation_asArray[i];var voRepresentation=new _voRepresentation2['default']();voRepresentation.index = i;voRepresentation.adaptation = voAdaptation;if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].ID)){voRepresentation.id = realRepresentation.id;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].CODECS)){voRepresentation.codecs = realRepresentation.codecs;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].CODEC_PRIVATE_DATA)){voRepresentation.codecPrivateData = realRepresentation.codecPrivateData;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].BANDWITH)){voRepresentation.bandwidth = realRepresentation.bandwidth;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].WIDTH)){voRepresentation.width = realRepresentation.width;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].HEIGHT)){voRepresentation.height = realRepresentation.height;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SCAN_TYPE)){voRepresentation.scanType = realRepresentation.scanType;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].MAX_PLAYOUT_RATE)){voRepresentation.maxPlayoutRate = realRepresentation.maxPlayoutRate;}if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_BASE)){segmentInfo = realRepresentation.SegmentBase;voRepresentation.segmentInfoType = _constantsDashConstants2['default'].SEGMENT_BASE;}else if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_LIST)){segmentInfo = realRepresentation.SegmentList;if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TIMELINE)){voRepresentation.segmentInfoType = _constantsDashConstants2['default'].SEGMENT_TIMELINE;voRepresentation.useCalculatedLiveEdgeTime = isLastRepeatAttributeValid(segmentInfo.SegmentTimeline);}else {voRepresentation.segmentInfoType = _constantsDashConstants2['default'].SEGMENT_LIST;voRepresentation.useCalculatedLiveEdgeTime = true;}}else if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TEMPLATE)){segmentInfo = realRepresentation.SegmentTemplate;if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].SEGMENT_TIMELINE)){voRepresentation.segmentInfoType = _constantsDashConstants2['default'].SEGMENT_TIMELINE;voRepresentation.useCalculatedLiveEdgeTime = isLastRepeatAttributeValid(segmentInfo.SegmentTimeline);}else {voRepresentation.segmentInfoType = _constantsDashConstants2['default'].SEGMENT_TEMPLATE;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].INITIALIZATION_MINUS)){voRepresentation.initialization = segmentInfo.initialization.split('$Bandwidth$').join(realRepresentation.bandwidth).split('$RepresentationID$').join(realRepresentation.id);}}else {voRepresentation.segmentInfoType = _constantsDashConstants2['default'].BASE_URL;}voRepresentation.essentialProperties = getEssentialPropertiesForRepresentation(realRepresentation);if(segmentInfo){if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].INITIALIZATION)){var initialization=segmentInfo.Initialization;if(initialization.hasOwnProperty(_constantsDashConstants2['default'].SOURCE_URL)){voRepresentation.initialization = initialization.sourceURL;}else if(initialization.hasOwnProperty(_constantsDashConstants2['default'].RANGE)){voRepresentation.range = initialization.range; // initialization source url will be determined from
// BaseURL when resolved at load time.
}}else if(realRepresentation.hasOwnProperty(_constantsDashConstants2['default'].MIME_TYPE) && getIsTextTrack(realRepresentation.mimeType)){voRepresentation.range = 0;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].TIMESCALE)){voRepresentation.timescale = segmentInfo.timescale;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].DURATION)){ // TODO according to the spec @maxSegmentDuration specifies the maximum duration of any Segment in any Representation in the Media Presentation
// It is also said that for a SegmentTimeline any @d value shall not exceed the value of MPD@maxSegmentDuration, but nothing is said about
// SegmentTemplate @duration attribute. We need to find out if @maxSegmentDuration should be used instead of calculated duration if the the duration
// exceeds @maxSegmentDuration
//representation.segmentDuration = Math.min(segmentInfo.duration / representation.timescale, adaptation.period.mpd.maxSegmentDuration);
voRepresentation.segmentDuration = segmentInfo.duration / voRepresentation.timescale;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].MEDIA)){voRepresentation.media = segmentInfo.media;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].START_NUMBER)){voRepresentation.startNumber = segmentInfo.startNumber;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].INDEX_RANGE)){voRepresentation.indexRange = segmentInfo.indexRange;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].PRESENTATION_TIME_OFFSET)){voRepresentation.presentationTimeOffset = segmentInfo.presentationTimeOffset / voRepresentation.timescale;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_TIME_OFFSET)){voRepresentation.availabilityTimeOffset = segmentInfo.availabilityTimeOffset;}else if(baseUrl && baseUrl.availabilityTimeOffset !== undefined){voRepresentation.availabilityTimeOffset = baseUrl.availabilityTimeOffset;}if(segmentInfo.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_TIME_COMPLETE)){voRepresentation.availabilityTimeComplete = segmentInfo.availabilityTimeComplete !== 'false';}else if(baseUrl && baseUrl.availabilityTimeComplete !== undefined){voRepresentation.availabilityTimeComplete = baseUrl.availabilityTimeComplete;}}voRepresentation.MSETimeOffset = timelineConverter.calcMSETimeOffset(voRepresentation);voRepresentation.path = [voAdaptation.period.index,voAdaptation.index,i];voRepresentations.push(voRepresentation);}}return voRepresentations;}function getAdaptationsForPeriod(voPeriod){var realPeriod=voPeriod && isInteger(voPeriod.index)?voPeriod.mpd.manifest.Period_asArray[voPeriod.index]:null;var voAdaptations=[];var voAdaptationSet=undefined,realAdaptationSet=undefined,i=undefined;if(realPeriod && realPeriod.AdaptationSet_asArray){for(i = 0;i < realPeriod.AdaptationSet_asArray.length;i++) {realAdaptationSet = realPeriod.AdaptationSet_asArray[i];voAdaptationSet = new _voAdaptationSet2['default']();if(realAdaptationSet.hasOwnProperty(_constantsDashConstants2['default'].ID)){voAdaptationSet.id = realAdaptationSet.id;}voAdaptationSet.index = i;voAdaptationSet.period = voPeriod;if(getIsMuxed(realAdaptationSet)){voAdaptationSet.type = _streamingConstantsConstants2['default'].MUXED;}else if(getIsAudio(realAdaptationSet)){voAdaptationSet.type = _streamingConstantsConstants2['default'].AUDIO;}else if(getIsVideo(realAdaptationSet)){voAdaptationSet.type = _streamingConstantsConstants2['default'].VIDEO;}else if(getIsFragmentedText(realAdaptationSet)){voAdaptationSet.type = _streamingConstantsConstants2['default'].FRAGMENTED_TEXT;}else if(getIsImage(realAdaptationSet)){voAdaptationSet.type = _streamingConstantsConstants2['default'].IMAGE;}else {voAdaptationSet.type = _streamingConstantsConstants2['default'].TEXT;}voAdaptations.push(voAdaptationSet);}}return voAdaptations;}function getRegularPeriods(mpd){var isDynamic=mpd?getIsDynamic(mpd.manifest):false;var voPeriods=[];var realPeriod1=null;var realPeriod=null;var voPeriod1=null;var voPeriod=null;var len=undefined,i=undefined;for(i = 0,len = mpd && mpd.manifest && mpd.manifest.Period_asArray?mpd.manifest.Period_asArray.length:0;i < len;i++) {realPeriod = mpd.manifest.Period_asArray[i]; // If the attribute @start is present in the Period, then the
// Period is a regular Period and the PeriodStart is equal
// to the value of this attribute.
if(realPeriod.hasOwnProperty(_constantsDashConstants2['default'].START)){voPeriod = new _voPeriod2['default']();voPeriod.start = realPeriod.start;} // If the @start attribute is absent, but the previous Period
// element contains a @duration attribute then then this new
// Period is also a regular Period. The start time of the new
// Period PeriodStart is the sum of the start time of the previous
// Period PeriodStart and the value of the attribute @duration
// of the previous Period.
else if(realPeriod1 !== null && realPeriod.hasOwnProperty(_constantsDashConstants2['default'].DURATION) && voPeriod1 !== null){voPeriod = new _voPeriod2['default']();voPeriod.start = parseFloat((voPeriod1.start + voPeriod1.duration).toFixed(5));voPeriod.duration = realPeriod.duration;} // If (i) @start attribute is absent, and (ii) the Period element
// is the first in the MPD, and (iii) the MPD@type is 'static',
// then the PeriodStart time shall be set to zero.
else if(i === 0 && !isDynamic){voPeriod = new _voPeriod2['default']();voPeriod.start = 0;} // The Period extends until the PeriodStart of the next Period.
// The difference between the PeriodStart time of a Period and
// the PeriodStart time of the following Period.
if(voPeriod1 !== null && isNaN(voPeriod1.duration)){voPeriod1.duration = parseFloat((voPeriod.start - voPeriod1.start).toFixed(5));}if(voPeriod !== null){voPeriod.id = getPeriodId(realPeriod,i);}if(voPeriod !== null && realPeriod.hasOwnProperty(_constantsDashConstants2['default'].DURATION)){voPeriod.duration = realPeriod.duration;}if(voPeriod !== null){voPeriod.index = i;voPeriod.mpd = mpd;voPeriods.push(voPeriod);realPeriod1 = realPeriod;voPeriod1 = voPeriod;}realPeriod = null;voPeriod = null;}if(voPeriods.length === 0){return voPeriods;} // The last Period extends until the end of the Media Presentation.
// The difference between the PeriodStart time of the last Period
// and the mpd duration
if(voPeriod1 !== null && isNaN(voPeriod1.duration)){voPeriod1.duration = parseFloat((getEndTimeForLastPeriod(voPeriod1) - voPeriod1.start).toFixed(5));}return voPeriods;}function getPeriodId(realPeriod,i){if(!realPeriod){throw new Error('Period cannot be null or undefined');}var id=_voPeriod2['default'].DEFAULT_ID + '_' + i;if(realPeriod.hasOwnProperty(_constantsDashConstants2['default'].ID) && realPeriod.id.length > 0 && realPeriod.id !== '__proto__'){id = realPeriod.id;}return id;}function getMpd(manifest){var mpd=new _voMpd2['default']();if(manifest){mpd.manifest = manifest;if(manifest.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_START_TIME)){mpd.availabilityStartTime = new Date(manifest.availabilityStartTime.getTime());}else {mpd.availabilityStartTime = new Date(manifest.loadedTime.getTime());}if(manifest.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_END_TIME)){mpd.availabilityEndTime = new Date(manifest.availabilityEndTime.getTime());}if(manifest.hasOwnProperty(_constantsDashConstants2['default'].MINIMUM_UPDATE_PERIOD)){mpd.minimumUpdatePeriod = manifest.minimumUpdatePeriod;}if(manifest.hasOwnProperty(_constantsDashConstants2['default'].MEDIA_PRESENTATION_DURATION)){mpd.mediaPresentationDuration = manifest.mediaPresentationDuration;}if(manifest.hasOwnProperty(_streamingConstantsConstants2['default'].SUGGESTED_PRESENTATION_DELAY)){mpd.suggestedPresentationDelay = manifest.suggestedPresentationDelay;}if(manifest.hasOwnProperty(_constantsDashConstants2['default'].TIMESHIFT_BUFFER_DEPTH)){mpd.timeShiftBufferDepth = manifest.timeShiftBufferDepth;}if(manifest.hasOwnProperty(_constantsDashConstants2['default'].MAX_SEGMENT_DURATION)){mpd.maxSegmentDuration = manifest.maxSegmentDuration;}}return mpd;}function getEndTimeForLastPeriod(voPeriod){var isDynamic=getIsDynamic(voPeriod.mpd.manifest);var periodEnd=undefined;if(voPeriod.mpd.manifest.mediaPresentationDuration){periodEnd = voPeriod.mpd.manifest.mediaPresentationDuration;}else if(voPeriod.duration){periodEnd = voPeriod.duration;}else if(isDynamic){periodEnd = Number.POSITIVE_INFINITY;}else {throw new Error('Must have @mediaPresentationDuration on MPD or an explicit @duration on the last period.');}return periodEnd;}function getEventsForPeriod(period){var manifest=period && period.mpd && period.mpd.manifest?period.mpd.manifest:null;var periodArray=manifest?manifest.Period_asArray:null;var eventStreams=periodArray && period && isInteger(period.index)?periodArray[period.index].EventStream_asArray:null;var events=[];var i=undefined,j=undefined;if(eventStreams){for(i = 0;i < eventStreams.length;i++) {var eventStream=new _voEventStream2['default']();eventStream.period = period;eventStream.timescale = 1;if(eventStreams[i].hasOwnProperty(_streamingConstantsConstants2['default'].SCHEME_ID_URI)){eventStream.schemeIdUri = eventStreams[i].schemeIdUri;}else {throw new Error('Invalid EventStream. SchemeIdUri has to be set');}if(eventStreams[i].hasOwnProperty(_constantsDashConstants2['default'].TIMESCALE)){eventStream.timescale = eventStreams[i].timescale;}if(eventStreams[i].hasOwnProperty(_constantsDashConstants2['default'].VALUE)){eventStream.value = eventStreams[i].value;}for(j = 0;j < eventStreams[i].Event_asArray.length;j++) {var _event=new _voEvent2['default']();_event.presentationTime = 0;_event.eventStream = eventStream;if(eventStreams[i].Event_asArray[j].hasOwnProperty(_constantsDashConstants2['default'].PRESENTATION_TIME)){_event.presentationTime = eventStreams[i].Event_asArray[j].presentationTime;}if(eventStreams[i].Event_asArray[j].hasOwnProperty(_constantsDashConstants2['default'].DURATION)){_event.duration = eventStreams[i].Event_asArray[j].duration;}if(eventStreams[i].Event_asArray[j].hasOwnProperty(_constantsDashConstants2['default'].ID)){_event.id = eventStreams[i].Event_asArray[j].id;}events.push(_event);}}}return events;}function getEventStreams(inbandStreams,representation){var eventStreams=[];var i=undefined;if(!inbandStreams)return eventStreams;for(i = 0;i < inbandStreams.length;i++) {var eventStream=new _voEventStream2['default']();eventStream.timescale = 1;eventStream.representation = representation;if(inbandStreams[i].hasOwnProperty(_streamingConstantsConstants2['default'].SCHEME_ID_URI)){eventStream.schemeIdUri = inbandStreams[i].schemeIdUri;}else {throw new Error('Invalid EventStream. SchemeIdUri has to be set');}if(inbandStreams[i].hasOwnProperty(_constantsDashConstants2['default'].TIMESCALE)){eventStream.timescale = inbandStreams[i].timescale;}if(inbandStreams[i].hasOwnProperty(_constantsDashConstants2['default'].VALUE)){eventStream.value = inbandStreams[i].value;}eventStreams.push(eventStream);}return eventStreams;}function getEventStreamForAdaptationSet(manifest,adaptation){var inbandStreams=undefined,periodArray=undefined,adaptationArray=undefined;if(manifest && manifest.Period_asArray && adaptation && adaptation.period && isInteger(adaptation.period.index)){periodArray = manifest.Period_asArray[adaptation.period.index];if(periodArray && periodArray.AdaptationSet_asArray && isInteger(adaptation.index)){adaptationArray = periodArray.AdaptationSet_asArray[adaptation.index];if(adaptationArray){inbandStreams = adaptationArray.InbandEventStream_asArray;}}}return getEventStreams(inbandStreams,null);}function getEventStreamForRepresentation(manifest,representation){var inbandStreams=undefined,periodArray=undefined,adaptationArray=undefined,representationArray=undefined;if(manifest && manifest.Period_asArray && representation && representation.adaptation && representation.adaptation.period && isInteger(representation.adaptation.period.index)){periodArray = manifest.Period_asArray[representation.adaptation.period.index];if(periodArray && periodArray.AdaptationSet_asArray && isInteger(representation.adaptation.index)){adaptationArray = periodArray.AdaptationSet_asArray[representation.adaptation.index];if(adaptationArray && adaptationArray.Representation_asArray && isInteger(representation.index)){representationArray = adaptationArray.Representation_asArray[representation.index];if(representationArray){inbandStreams = representationArray.InbandEventStream_asArray;}}}}return getEventStreams(inbandStreams,representation);}function getUTCTimingSources(manifest){var isDynamic=getIsDynamic(manifest);var hasAST=manifest?manifest.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_START_TIME):false;var utcTimingsArray=manifest?manifest.UTCTiming_asArray:null;var utcTimingEntries=[]; // do not bother synchronizing the clock unless MPD is live,
// or it is static and has availabilityStartTime attribute
if(isDynamic || hasAST){if(utcTimingsArray){ // the order is important here - 23009-1 states that the order
// in the manifest "indicates relative preference, first having
// the highest, and the last the lowest priority".
utcTimingsArray.forEach(function(utcTiming){var entry=new _voUTCTiming2['default']();if(utcTiming.hasOwnProperty(_streamingConstantsConstants2['default'].SCHEME_ID_URI)){entry.schemeIdUri = utcTiming.schemeIdUri;}else { // entries of type DescriptorType with no schemeIdUri
// are meaningless. let's just ignore this entry and
// move on.
return;} // this is (incorrectly) interpreted as a number - schema
// defines it as a string
if(utcTiming.hasOwnProperty(_constantsDashConstants2['default'].VALUE)){entry.value = utcTiming.value.toString();}else { // without a value, there's not a lot we can do with
// this entry. let's just ignore this one and move on
return;} // we're not interested in the optional id or any other
// attributes which might be attached to the entry
utcTimingEntries.push(entry);});}}return utcTimingEntries;}function getBaseURLsFromElement(node){var baseUrls=[]; // if node.BaseURL_asArray and node.baseUri are undefined entries
// will be [undefined] which entries.some will just skip
var entries=node.BaseURL_asArray || [node.baseUri];var earlyReturn=false;entries.some(function(entry){if(entry){var baseUrl=new _voBaseURL2['default']();var text=entry.__text || entry;if(urlUtils.isRelative(text)){ // it doesn't really make sense to have relative and
// absolute URLs at the same level, or multiple
// relative URLs at the same level, so assume we are
// done from this level of the MPD
earlyReturn = true; // deal with the specific case where the MPD@BaseURL
// is specified and is relative. when no MPD@BaseURL
// entries exist, that case is handled by the
// [node.baseUri] in the entries definition.
if(node.baseUri){text = urlUtils.resolve(text,node.baseUri);}}baseUrl.url = text; // serviceLocation is optional, but we need it in order
// to blacklist correctly. if it's not available, use
// anything unique since there's no relationship to any
// other BaseURL and, in theory, the url should be
// unique so use this instead.
if(entry.hasOwnProperty(_constantsDashConstants2['default'].SERVICE_LOCATION) && entry.serviceLocation.length){baseUrl.serviceLocation = entry.serviceLocation;}else {baseUrl.serviceLocation = text;}if(entry.hasOwnProperty(_constantsDashConstants2['default'].DVB_PRIORITY)){baseUrl.dvb_priority = entry[_constantsDashConstants2['default'].DVB_PRIORITY];}if(entry.hasOwnProperty(_constantsDashConstants2['default'].DVB_WEIGHT)){baseUrl.dvb_weight = entry[_constantsDashConstants2['default'].DVB_WEIGHT];}if(entry.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_TIME_OFFSET)){baseUrl.availabilityTimeOffset = entry[_constantsDashConstants2['default'].AVAILABILITY_TIME_OFFSET];}if(entry.hasOwnProperty(_constantsDashConstants2['default'].AVAILABILITY_TIME_COMPLETE)){baseUrl.availabilityTimeComplete = entry[_constantsDashConstants2['default'].AVAILABILITY_TIME_COMPLETE] !== 'false';} /* NOTE: byteRange currently unused
                 */baseUrls.push(baseUrl);return earlyReturn;}});return baseUrls;}function getLocation(manifest){if(manifest && manifest.hasOwnProperty(_streamingConstantsConstants2['default'].LOCATION)){ // for now, do not support multiple Locations -
// just set Location to the first Location.
manifest.Location = manifest.Location_asArray[0];return manifest.Location;} // may well be undefined
return undefined;}instance = {getIsTypeOf:getIsTypeOf,getIsAudio:getIsAudio,getIsVideo:getIsVideo,getIsText:getIsText,getIsMuxed:getIsMuxed,getIsTextTrack:getIsTextTrack,getIsFragmentedText:getIsFragmentedText,getIsImage:getIsImage,getIsMain:getIsMain,getLanguageForAdaptation:getLanguageForAdaptation,getViewpointForAdaptation:getViewpointForAdaptation,getRolesForAdaptation:getRolesForAdaptation,getAccessibilityForAdaptation:getAccessibilityForAdaptation,getAudioChannelConfigurationForAdaptation:getAudioChannelConfigurationForAdaptation,getAdaptationForIndex:getAdaptationForIndex,getIndexForAdaptation:getIndexForAdaptation,getAdaptationForId:getAdaptationForId,getAdaptationsForType:getAdaptationsForType,getAdaptationForType:getAdaptationForType,getCodec:getCodec,getMimeType:getMimeType,getKID:getKID,getContentProtectionData:getContentProtectionData,getIsDynamic:getIsDynamic,getIsDVB:getIsDVB,getDuration:getDuration,getBandwidth:getBandwidth,getManifestUpdatePeriod:getManifestUpdatePeriod,getRepresentationCount:getRepresentationCount,getBitrateListForAdaptation:getBitrateListForAdaptation,getRepresentationFor:getRepresentationFor,getRepresentationsForAdaptation:getRepresentationsForAdaptation,getAdaptationsForPeriod:getAdaptationsForPeriod,getRegularPeriods:getRegularPeriods,getMpd:getMpd,getEventsForPeriod:getEventsForPeriod,getEventStreamForAdaptationSet:getEventStreamForAdaptationSet,getEventStreamForRepresentation:getEventStreamForRepresentation,getUTCTimingSources:getUTCTimingSources,getBaseURLsFromElement:getBaseURLsFromElement,getRepresentationSortFunction:getRepresentationSortFunction,getLocation:getLocation,getUseCalculatedLiveEdgeTimeForAdaptation:getUseCalculatedLiveEdgeTimeForAdaptation};return instance;}DashManifestModel.__dashjs_factory_name = 'DashManifestModel';exports['default'] = _coreFactoryMaker2['default'].getSingletonFactory(DashManifestModel);module.exports = exports['default'];
//# sourceMappingURL=DashManifestModel.js.map